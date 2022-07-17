import { IsNumber, IsString } from 'class-validator';

export class ProductLink {
  @IsString()
  prod: string;
  @IsString()
  stage: string;
}

export class ProductVisibility {
  @IsNumber()
  from: number;
  @IsNumber()
  to: number;
}
