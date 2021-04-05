import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class IndexBlockchain extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  indexId: number;

  @Column()
  name: string;

  @Column()
  ethPriceInWei: string;

  @Column()
  percentageChange: number;

  @Column()
  usdCapitalization: number;

  @Column()
  usdPriceInCents: number;
}
