import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Observable, lastValueFrom, map } from 'rxjs';
import { AxiosRequestConfig, AxiosResponse} from 'axios'
import { HttpService } from '@nestjs/axios';

@Injectable()
export abstract class ExternalApi {
  @Inject(HttpService) protected httpService: HttpService;
  protected token: string;

  constructor(protected baseUrl: string) {}

  protected validateResponse<R = unknown>(response): R {
    return response;
  }

  async send<R = unknown>(
    method: string,
    url: string,
    data: Partial<AxiosRequestConfig> = {},
    config: Partial<AxiosRequestConfig> = {},
  ): Promise<R> {
    if (!this.baseUrl) {
      throw new InternalServerErrorException('Wrong url to internal api.');
    }

    const response: Observable<AxiosResponse<R>> = this.httpService.request({
      method,
      url: `${this.baseUrl}/${url}`,
      ...config,
      ...data,
    });

    return lastValueFrom(
      response.pipe(
        map((response: AxiosResponse<R>): R => {
          if (!response.data) {
            throw new InternalServerErrorException();
          }

          const validatedData = this.validateResponse<R>(response.data);

          return validatedData;
        }),
      ),
    );
  }
}
