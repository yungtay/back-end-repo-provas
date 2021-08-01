import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Discipline from './Disciplines'

@Entity('periods')
export default class Period {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;


}