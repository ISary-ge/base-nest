import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatApiModule } from './stat-api/stat-api.module';

import dbConfiguration from "./config/db.config"

@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true,
        load: [dbConfiguration],
    }),
    TypeOrmModule.forRootAsync({
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => ({...configService.get('database')})
    }),
    StatApiModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
