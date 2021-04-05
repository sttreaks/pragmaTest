import { Entity, Column, PrimaryColumn } from 'typeorm';

export interface IIndexBlockchain {
  id: string;
  name: string;
  ethPriceInWei: number;
  usdPriceInCents: number;
  usdCapitalization: number;
  percentageChange: number;
}

@Entity({ schema: 'public' })
export class IndexBlockchain implements IIndexBlockchain {
  constructor(id: string) {
    this.id = id;
  }

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  ethPriceInWei: number;

  @Column()
  percentageChange: number;

  @Column()
  usdCapitalization: number;

  @Column()
  usdPriceInCents: number;
}
