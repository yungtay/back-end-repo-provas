import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Test from './Test'

@Entity('disciplines')
export default class Discipline {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Test, tests => tests.id)
  tests: Test[];
}