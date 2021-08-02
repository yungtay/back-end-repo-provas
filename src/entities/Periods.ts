import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity('periods')
export default class Period {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;


}