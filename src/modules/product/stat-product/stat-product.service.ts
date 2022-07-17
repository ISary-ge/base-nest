import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdateStatProductDto, CreateStatProductDto } from "./stat-product.dto";
import { StatProduct } from "./stat-product.entity";

@Injectable()
export class StatProductService {

	constructor(@InjectRepository(StatProduct) private readonly statProductRepository: Repository<StatProduct>) {}

	async getAll(): Promise<StatProduct[]> {
		return await this.statProductRepository.find();
	}

	async update(id: number, updateDto: UpdateStatProductDto): Promise<void>{
		console.log(id, updateDto);
		const oldProduct = await this.statProductRepository.findBy({statProductId: id});

		if(!oldProduct){
			throw new NotFoundException('Platform product not found');
		}
		console.log(oldProduct);
		await this.statProductRepository.update({statProductId: id}, updateDto);
	}

	async create(createDto: CreateStatProductDto): Promise<number>{
		const newProduct = this.statProductRepository.create(createDto);

		return newProduct.statProductId
		
	}

}