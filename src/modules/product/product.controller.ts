import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { OnlySupport } from "src/common/decorators/auth.decorators";


@Controller()
export class ProductController {
	constructor(
		private readonly platformProductService: PlatformProductService,
		private readonly statProductService: StatProductService,
		private readonly dashboardProductService: DashboardProductService
	)

	@Get('platformProduct')
	async getPlatformProductAll(): Promise<PlatformProduct[]> {

	}

	@Post('platformProduct')
	@OnlySupport()
	async createPlatformProduct(@Body() dto: CreatePlatformProductDto): Promise<number>{

	}

	@Put('platformProduct')
	@OnlySupport()
	async updatePlatformProduct(@Param('id') id: number, @Body() dto: UpdatePlatformProudctDto): Promise<void> {

	};

	@Get('statProduct')
	async getStatProductAll(): Promise<StatProduct[]> {

	}

	@Post('statProduct')
	@OnlySupport()
	async createStatProduct(@Body() dto: CreateStatProductDto): Promise<number> {

	}

	@Put('statProduct')
	@OnlySupport()
	async updateStatProduct(@Param('id') id: number, @Body() dto: UpdateStatProductDto): Promise<void> {

	}

	@Get('dashboardProduct')
	async getDashboardProductAll(): Promise<DashboardProduct[]> {

	}

	@Post('dashboardProduct')
	@OnlySupport()
	async createDashboardProduct(@Body() dto: CreateDashboardProduct): Promise<number>{

	}

	@Put('dashboardProduct')
	@OnlySupport()
	async updateDashboardProduct(@Param('id') id: number, @Body() dto: UpdateDashboardProduct) : Promise<void>{


	}

	@Get('forTopbar')
	async getProductsForTopbar(){}

	
	@Get('forDashboard')
	async getProductsForDashboard(){}

	@Get('forShop')
	async getProductsForShop(){}

	@Get('forServices')
	async getProductsForServices(){}

	@Get('forRolesManagment')
	async getProductsForRolesManagment(){}


}