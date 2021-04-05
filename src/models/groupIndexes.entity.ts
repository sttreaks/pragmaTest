import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class GroupIndex extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  group: number;

  @Column()
  index: number;
}
