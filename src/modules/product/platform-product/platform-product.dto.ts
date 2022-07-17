import { ProductLink, ProductVisibility } from './platform-product.interfaces';
import { IsNumber, IsObject, IsOptional, IsString, Validate, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer';


export class CreatePlatformProductDto{

	@IsNumber()
	statProductId: number;

	@IsString()
	name: string;

	@IsString()
	@IsOptional()
	version?: string;

	@IsObject()
	@IsOptional()
	@ValidateNested()
	@Type(() => ProductLink)
	link?: ProductLink;

	@IsOptional()
	@ValidateNested()
	@Type(() => ProductVisibility)
	topbarVisibility?: ProductVisibility;

	@IsOptional()
	@ValidateNested()
	@Type(() => ProductVisibility)
	dashboardVisibility?: ProductVisibility;


}

export class UpdatePlatformProductDto{
	
	@IsNumber()
	@IsOptional()
	statProductId?: number;

	@IsString()
	@IsOptional()
	name?: string;

	@IsString()
	@IsOptional()
	version?: string;

	@IsObject()
	@IsOptional()
	@ValidateNested()
	@Type(() => ProductLink)
	link?: ProductLink;

	@IsOptional()
	@ValidateNested()
	@Type(() => ProductVisibility)
	topbarVisibility?: ProductVisibility;

	@IsOptional()
	@ValidateNested()
	@Type(() => ProductVisibility)
	dashboardVisibility?: ProductVisibility;
}