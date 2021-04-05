import { Entity, Column, PrimaryColumn } from 'typeorm';

export interface IGroup {
  id: string;
  name: string;
}

@Entity({ schema: 'public' })
export class Group implements IGroup {
  constructor(id?: string) {
    this.id = id;
  }

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
}
