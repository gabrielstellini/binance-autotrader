export interface CoinHolding {
  icon: string;
  name: string;
  baseFiat: string;
  percentage: number;
  amountInCoin: number;
  amountInFiat: {
    currency: string;
    amount: number;
  };
}

export interface FiatHolding {
  icon: string;
  name: string;
  liquid: number;
  coin: number;
  total: number;
}
