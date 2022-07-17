import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PlatformProduct } from "./platform-product.entity";

@Injectable()
export class PlatformProductService {

	constructor(@InjectRepository(PlatformProduct) private readonly platformProductRepository: Repository<PlatformProduct>) {}

	
	

}