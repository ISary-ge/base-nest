import { ProductLink } from './../platform-product/platform-product.interfaces';
import { IsNumber, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateDashboardProductDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  weight?: number;

  @IsObject()
  @IsOptional()
  @ValidateNested()
  @Type(() => ProductLink)
  link?: ProductLink;

  @IsNumber()
  platformProductId: number;
}

export class UpdateDashboardProductDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  weight?: number;

  @IsObject()
  @IsOptional()
  @ValidateNested()
  @Type(() => ProductLink)
  link?: ProductLink;

  @IsNumber()
  @IsOptional()
  platformProductId?: number;
}
