import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {

  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;
  
  @Column()
  name: string;
  
}