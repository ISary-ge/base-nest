import { Transform, Type } from 'class-transformer';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { ProductVisibility } from './../platform-product/platform-product.interfaces';

export class CreateStatProductDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => ProductVisibility)
  serviceVisibility?: ProductVisibility;

  @IsOptional()
  @ValidateNested()
  @Type(() => ProductVisibility)
  rolesVisibility: ProductVisibility;

  @IsOptional()
  @ValidateNested()
  @Type(() => ProductVisibility)
  shopVisibility: ProductVisibility;

  // TODO: string array
  @IsArray()
  @Transform(({ value }) => value.map((role) => Number(role)))
  roles: number[];

  @IsString()
  name: string;

  @IsString()
  enableLink: string;
}

export class UpdateStatProductDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => ProductVisibility)
  serviceVisibility?: ProductVisibility;

  @IsOptional()
  @ValidateNested()
  @Type(() => ProductVisibility)
  rolesVisibility?: ProductVisibility;

  @IsOptional()
  @ValidateNested()
  @Type(() => ProductVisibility)
  shopVisibility?: ProductVisibility;

  // TODO: string array
  @IsArray()
  @IsOptional()
  @Transform(({ value }) => value.map((role) => Number(role)))
  roles?: number[];

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  enableLink?: string;
}
