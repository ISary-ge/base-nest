import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PlatformProduct } from "../platform-product/platform-product.entity";
import { ProductLink } from "../platform-product/platform-product.interfaces";


@Entity()
export class DashboardProduct{

	@PrimaryGeneratedColumn()
	dashboardProductId: number;

	@Column("text", {default: ""})
	name: string;

	@Column("integer", {default: 10})
	weight: number;

	@Column("jsonb", {default: {}})
	link: ProductLink;

	@ManyToOne(() => PlatformProduct, (platformProduct) => platformProduct.dashboardProducts)
	@JoinColumn([{referencedColumnName: "platformProductId"}])
	platformProduct: PlatformProduct;

}