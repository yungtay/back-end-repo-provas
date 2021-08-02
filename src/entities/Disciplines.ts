import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import Test from './Test'
import Period from './Periods'
import DisciplineProfessor from './DisciplinesProfessors'

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

  @OneToMany(() => DisciplineProfessor, disciplineProfessors => disciplineProfessors.discipline)
  disciplineProfessor: DisciplineProfessor[]

  numberTests: number;
}