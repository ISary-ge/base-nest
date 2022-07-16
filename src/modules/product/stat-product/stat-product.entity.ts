import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ProductVisibility } from "../platform-product/platform-product.interfaces";

@Entity()
export class StatProduct {
	@PrimaryGeneratedColumn()
	statProductId: number;

	@Column("jsonb",{default: {}})
	serviceVisibility: ProductVisibility;

	@Column("jsonb",{default: {}})
	rolesVisibility: ProductVisibility;

	@Column("jsonb",{default: {}})
	shopVisibility: ProductVisibility;

	@Column("jsonb", {default: {}})
	roles: string[];

	@Column("text", {default: ''})
	name: string;

	@Column("text", {default: ""})
	enableLink: string;

}