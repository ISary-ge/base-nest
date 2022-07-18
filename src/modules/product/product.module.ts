import { DashboardProductService } from './dashboard-product/dashboard-product.service';
import { StatProductService } from './stat-product/stat-product.service';
import { StatApiModule } from './../../stat-api/stat-api.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PlatformProduct } from './platform-product/platform-product.entity';
import { StatProduct } from './stat-product/stat-product.entity';
import { DashboardProduct } from './dashboard-product/dashboard-product.entity';
import { ProductController } from './product.controller';
import { PlatformProductService } from './platform-product/platform-product.service';
import { HelpersService } from 'src/helpers/helpers.service';

@Module({
  imports: [TypeOrmModule.forFeature([PlatformProduct, StatProduct, DashboardProduct]), StatApiModule],
  controllers: [ProductController],
  providers: [PlatformProductService, StatProductService, DashboardProductService, HelpersService],
})
export class ProductModule {}
