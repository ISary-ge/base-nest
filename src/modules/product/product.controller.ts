import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AccountId, OnlySupport, UserId } from 'src/common/decorators/auth.decorators';
import { DashboardProduct } from './dashboard-product/dashboard-product.entity';
import { PlatformProduct } from './platform-product/platform-product.entity';
import { PlatformProductService } from './platform-product/platform-product.service';
import { StatProduct } from './stat-product/stat-product.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreatePlatformProductDto, UpdatePlatformProductDto } from './platform-product/platform-product.dto';
import { CreateStatProductDto, UpdateStatProductDto } from './stat-product/stat-product.dto';
import { StatProductService } from './stat-product/stat-product.service';
import { DashboardProductService } from './dashboard-product/dashboard-product.service';
import { CreateDashboardProductDto, UpdateDashboardProductDto } from './dashboard-product/dashboard-product.dto';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(
    private readonly platformProductService: PlatformProductService,
    private readonly statProductService: StatProductService,
    private readonly dashboardProductService: DashboardProductService,
  ) {}

  @Get('platformProduct')
  @OnlySupport()
  async getPlatformProductAll(): Promise<PlatformProduct[]> {
    return await this.platformProductService.getAll();
  }

  @Post('platformProduct')
  @OnlySupport()
  async createPlatformProduct(@Body() dto: CreatePlatformProductDto): Promise<number> {
    return await this.platformProductService.create(dto);
  }

  @Put('platformProduct/:id')
  @OnlySupport()
  async updatePlatformProduct(@Param('id') id: number, @Body() dto: UpdatePlatformProductDto): Promise<void> {
    await this.platformProductService.update(id, dto);
  }

  @Get('statProduct')
  async getStatProductAll(): Promise<StatProduct[]> {
    return await this.statProductService.getAll();
  }

  @Post('statProduct')
  @OnlySupport()
  async createStatProduct(@Body() dto: CreateStatProductDto): Promise<number> {
    return await this.statProductService.create(dto);
  }

  @Put('statProduct')
  @OnlySupport()
  async updateStatProduct(@Param('id') id: number, @Body() dto: UpdateStatProductDto): Promise<void> {
    await this.statProductService.update(id, dto);
  }

  @Get('dashboardProduct')
  async getDashboardProductAll(): Promise<DashboardProduct[]> {
    return await this.dashboardProductService.getAll();
  }

  @Post('dashboardProduct')
  @OnlySupport()
  async createDashboardProduct(@Body() dto: CreateDashboardProductDto): Promise<number> {
    return await this.dashboardProductService.create(dto);
  }

  @Put('dashboardProduct')
  @OnlySupport()
  async updateDashboardProduct(@Param('id') id: number, @Body() dto: UpdateDashboardProductDto): Promise<void> {
    await this.dashboardProductService.update(id, dto);
  }

  // @Get('forTopbar')
  // @OnlySupport()
  // async getProductsForTopbar(
  //   @UserId() userId: number | string,
  //   @AccountId() accountId: number | string,
  // ): Promise<TopbarProduct[]> {
  //   const inputForTopbar = await Promise.all([
  //     this.platformProductService.getAll(),
  //     this.statProductService.getAll(),
  //     this.dashboardProductService.getAll(),
  //   ]);

  //   return this.platformProductService.getProductsForTopbar([...inputForTopbar, userId, accountId]);
  // }

  // @Get('forDashboard')
  // async getProductsForDashboard(){}

  // @Get('forShop')
  // async getProductsForShop(){}

  // @Get('forServices')
  // async getProductsForServices(){}

  // @Get('forRolesManagment')
  // async getProductsForRolesManagment(){}
}
