import { HelpersService } from './../helpers/helpers.service';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { StatApiService } from './stat-api.service';

@Module({
  imports: [HttpModule],
  providers: [StatApiService,HelpersService],
})
export class StatApiModule {}
