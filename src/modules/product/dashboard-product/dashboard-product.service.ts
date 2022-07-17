import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdateDashboardProductDto, CreateDashboardProductDto } from "./dashboard-product.dto";
import { DashboardProduct } from "./dashboard-product.entity";


@Injectable()
export class DashboardProductService {

	constructor(@InjectRepository(DashboardProduct) private readonly dashboardProductRepository: Repository<DashboardProduct>) {}

	
	async getAll(): Promise<DashboardProduct[]> {
		return await this.dashboardProductRepository.find();
	}

	async update(id: number, updateDto: UpdateDashboardProductDto): Promise<void>{
		console.log(id, updateDto);
		const oldProduct = await this.dashboardProductRepository.findBy({dashboardProductId: id});

		if(!oldProduct){
			throw new NotFoundException('Platform product not found');
		}
		console.log(oldProduct);
		await this.dashboardProductRepository.update({dashboardProductId: id}, updateDto);
	}

	async create(createDto: CreateDashboardProductDto): Promise<number>{
		const newProduct = this.dashboardProductRepository.create(createDto);

		return newProduct.dashboardProductId
		
	}

}