import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bookName: string;

  @Column()
  authorName: string;

  @Column()
  publishedYear: number;

  @Column({ default: true })
  isAvailable: boolean;
}
