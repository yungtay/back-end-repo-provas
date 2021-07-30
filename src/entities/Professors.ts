import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Test from './Test'

@Entity('professors')
export default class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Test, tests => tests.professor)
  tests: Test[];

  numberTests: number;
}