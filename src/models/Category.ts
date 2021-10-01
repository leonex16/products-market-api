import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IProduct } from "../shared/interfaces/Prouduct";
import { Product } from "./Product";

@Entity()
export class Category {

  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;
  
  @Column()
  name: string;
  
}