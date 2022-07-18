import { HelpersModule } from './../helpers/helpers.module';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { StatApiService } from './stat-api.service';

const statApiService = {
  provide: StatApiService.name,
  useClass: StatApiService,
};

@Module({
  imports: [HttpModule, HelpersModule],
  providers: [statApiService],
  exports: [statApiService],
})
export class StatApiModule {}
