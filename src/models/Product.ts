import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, OneToOne, JoinColumn} from "typeorm";
import { ICategory } from "../shared/interfaces/Category";
import { Category } from "./Category";

@Entity()
export class Product {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url_image: string;

  @Column()
  price: number;

  @Column('double')
  discount: number;

  @ManyToOne( () => Category, category => category, { eager: true } )
  @JoinColumn({name: 'category'})
  category: Category;
  
}