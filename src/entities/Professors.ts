import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm";
import Test from './Test'
import Discipline from './Disciplines'

@Entity('professors')
export default class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Test, tests => tests.professor)
  tests: Test[];

  @ManyToMany(() => Discipline, disciplines => disciplines.professors)
  @JoinTable()
  disciplines: Discipline[];

  numberTests: number;
}