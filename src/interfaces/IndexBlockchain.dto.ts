export class IndexBlockchainDto {
  readonly indexId: number;
  readonly name: string;
  readonly ethPriceInWei: string;
  readonly usdPriceInCents: number;
  readonly usdCapitalization: number;
  readonly percentageChange: number;
}
