import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Discipline from './Disciplines';
import Professor from './Professors';

@Entity('disciplinesProfessors')
export default class DisciplineProfessor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  disciplineId: number;

  @ManyToOne(() => Discipline, (disciplines) => disciplines.id)
  discipline: Discipline[];

  @Column()
  professorId: number;

  @ManyToOne(() => Professor, (professors) => professors.id)
  professor: Professor[];
}
