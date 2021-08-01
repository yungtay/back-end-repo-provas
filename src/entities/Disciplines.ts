import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import Test from './Test'
import Period from './Periods'
import Professor from './Professors'

@Entity('disciplines')
export default class Discipline {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  periodId: number;

  @ManyToOne(() => Period, periods => periods.id)
  period: Period;

  @OneToMany(() => Test, tests => tests.discipline)
  tests: Test[];

  @ManyToMany(() => Professor, professors => professors.disciplines)
  professors: Professor[];

  numberTests: number;
}