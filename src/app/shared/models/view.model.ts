import { Buy2, OpenOrder, Sell2 } from './apiResponse';

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

export interface ProfitLoss {
  icon: string;
  name: string;
  buy: Buy2;
  sell: Sell2;
  status: string; // TODO: copy statuses to an enum
  totalAmountInFiat: {
    currency: string;
    amount: number;
  };
}

export interface ProfitLossSummary {
  icon: string;
  name: string;
  unrealizedProfit: number;
  totalAmountInFiat: number;
}

export interface FiatTotals {
  [key: string]: number;
}
