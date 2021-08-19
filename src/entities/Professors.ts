import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import Test from './Test';
import DisciplineProfessor from './DisciplinesProfessors';

@Entity('professors')
export default class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Test, (tests) => tests.professor)
  tests: Test[];

  @OneToMany(
    () => DisciplineProfessor,
    (disciplineProfessors) => disciplineProfessors.professor
  )
  professor: DisciplineProfessor;

  numberTests: number;
}
