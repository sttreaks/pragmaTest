import { Entity, Column } from 'typeorm';

@Entity()
export class Group {
  @Column()
  id: number;

  @Column()
  name: string;
}
