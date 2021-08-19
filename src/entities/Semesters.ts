import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Test from './Test';

@Entity('semesters')
export default class Semester {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Test, (tests) => tests.id)
  tests: Test[];
}
