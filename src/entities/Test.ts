import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import Category from './Categories'
import Professor from './Professors'
import Discipline from './Disciplines'
import Semester from './Semesters'

@Entity('tests')
export default class Test {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  semesterId: number;

  @ManyToOne(() => Semester, semesters => semesters.id)
  semester: number;

  @Column()
  categoryId: number;
  
  @ManyToOne(() => Category, categories => categories.id)
  category: number;

  @Column()
  professorId: number;
  
  @ManyToOne(() => Professor, professors => professors.id)
  professor: number;

  @Column()
  disciplineId: number;

  @ManyToOne(() => Discipline, disciplines => disciplines.id)
  discipline: number;
  
  @Column()
  pdf: string;
}