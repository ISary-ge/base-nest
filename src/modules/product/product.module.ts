import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { PlatformProduct } from './platform-product/platform-product.entity';
import { StatProduct } from './stat-product/stat-product.entity';
import { DashboardProduct } from './dashboard-product/dashboard-product.entity';
import { ProductController } from './product.controller';
import { PlatformProductService } from './platform-product/platform-product.service';


@Module({
	imports: [
		TypeOrmModule.forFeature([PlatformProduct, StatProduct, DashboardProduct])
	],
	controllers: [ProductController],
	providers: [PlatformProductService]
})
export class ProductModule{}