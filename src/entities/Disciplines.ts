import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import Test from './Test'
import Period from './Periods'

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

  numberTests: number;
}