import { DashboardProduct } from './../dashboard-product/dashboard-product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductLink, ProductVisibility } from './platform-product.interfaces';

@Entity()
export class PlatformProduct {
  @PrimaryGeneratedColumn({ name: 'platform_product_id' })
  platformProductId: number;

  @Column()
  statProductId: number;

  @Column('text', { default: '' })
  name: string;

  @Column('character varying')
  version: string;

  @Column('jsonb', { default: {} })
  link: ProductLink;

  @Column('jsonb')
  topbarVisibility: ProductVisibility;

  @Column('jsonb')
  dashboardVisibility: ProductVisibility;

  @OneToMany(() => DashboardProduct, (dashboardProduct) => dashboardProduct.platformProduct)
  dashboardProducts: DashboardProduct[];
}
