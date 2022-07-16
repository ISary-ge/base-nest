import { HelpersService } from './../helpers/helpers.service';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { lastValueFrom, map, Observable } from 'rxjs';
import { ExternalApi } from 'src/common/api/external-api';
import { StatApiExecResponse, StatApiResponse } from './stat-api.interfaces';

@Injectable()
export class StatApiService extends ExternalApi {
  constructor(private readonly configService: ConfigService, private readonly helpersService: HelpersService) {
    super(configService.get('stat.url'));
    this.token = configService.get('stat.token');
  }

  protected validateResponse<R = unknown>(response: StatApiResponse<R>): R {
    const { status, result } = response;

    if (status.toLowerCase() !== 'ok') {
      throw new InternalServerErrorException(`Stat return error: ${result}`);
    }

    return result;
  }

  async exec<R>(method: string, path: string, data = {}, config = {}) {
    if (!this.baseUrl || !config) {
      throw new InternalServerErrorException('Wrong credentials for external api.');
    }

    const query = method.toLowerCase() === 'get' ? `?${this.helpersService.objectToQuery(data)}` : '';
    const response: Observable<AxiosResponse<StatApiExecResponse<R>>> = this.httpService.request({
      method,
      url: `${this.baseUrl}${path}${query}`,
      ...config,
      ...data,
    });

    return lastValueFrom(
      response.pipe(
        map((response: AxiosResponse<StatApiExecResponse<R>>): R => {
          const { data } = response;

          if (!data) {
            throw new InternalServerErrorException();
          }

          if (data.status.toLowerCase() !== 'ok') {
            throw new InternalServerErrorException(`Stat return error: ${data.error}`);
          }

          return data.return;
        }),
      ),
    );
  }
}
