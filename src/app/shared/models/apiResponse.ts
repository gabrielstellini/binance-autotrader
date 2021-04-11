export interface ApiPayload {
  command: 'latest' | 'setting-update' | 'symbol-update' | 'symbol-delete' | 'symbol-setting-update' | 'symbol-setting-delete';
  data: any;
}

export interface ApiResponse {
  result: boolean;
  type: string;
  configuration: Configuration;
  common: Common;
  stats: Stats;
}

interface Stats {
  symbols: PriceSymbol[];
}

export interface PriceSymbol {
  globalConfiguration: Configuration;
  symbol: string;
  symbolConfiguration: Configuration;
  accountInfo: AccountInfo2;
  refreshAccountInfo: boolean;
  indicators: Indicators;
  symbolInfo: SymbolInfo;
  openOrders: OpenOrder[];
  action: string;
  baseAssetBalance: BaseAssetBalance;
  quoteAssetBalance: Balance;
  buy: Buy2;
  sell: Sell2;
}

export interface Sell2 {
  currentPrice: number;
  limitPrice: number;
  lastBuyPrice?: number | undefined;
  triggerPrice?: number | undefined;
  difference?: number;
  currentProfit?: number;
  currentProfitPercentage?: number;
  openOrders: OpenOrder[];
  processMessage: string;
  updatedAt: string;
}

export interface Buy2 {
  currentPrice: number;
  limitPrice: number;
  lowestPrice: number;
  triggerPrice: number;
  difference: number;
  openOrders: OpenOrder[];
  processMesage: string;
  updatedAt: string;
}

interface BaseAssetBalance {
  asset: string;
  free: number | string;
  locked: number | string;
  total: number;
  estimatedValue: number;
  updatedAt: string;
}

export interface OpenOrder {
  symbol: string;
  orderId: number;
  orderListId: number;
  clientOrderId: string;
  price: string;
  origQty: string;
  executedQty: string;
  cummulativeQuoteQty: string;
  status: string;
  timeInForce: string;
  type: string;
  side: string;
  stopPrice: string;
  icebergQty: string;
  time: number;
  updateTime: number;
  isWorking: boolean;
  origQuoteOrderQty: string;
  currentPrice: number;
  updatedAt: string;
  limitPrice: number;
  limitPercentage: number;
  differenceToExecute: number;
  differenceToCancel: number;
}

interface SymbolInfo {
  symbol: string;
  status: string;
  baseAsset: string;
  baseAssetPrecision: number;
  quoteAsset: string;
  quotePrecision: number;
  filterLotSize: FilterLotSize;
  filterPrice: FilterPrice;
  filterMinNotional: FilterMinNotional;
}

interface FilterMinNotional {
  filterType: string;
  minNotional: string;
  applyToMarket: boolean;
  avgPriceMins: number;
}

interface FilterPrice {
  filterType: string;
  minPrice: string;
  maxPrice: string;
  tickSize: string;
}

interface FilterLotSize {
  filterType: string;
  minQty: string;
  maxQty: string;
  stepSize: string;
}

interface Indicators {
  lowestPrice: number;
  lastCandle: LastCandle;
}

interface LastCandle {
  openTime: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  closeTime: number;
  quoteVolume: string;
  trades: number;
  baseAssetVolume: string;
  quoteAssetVolume: string;
}

interface AccountInfo2 {
  makerCommission: number;
  takerCommission: number;
  buyerCommission: number;
  sellerCommission: number;
  canTrade: boolean;
  canWithdraw: boolean;
  canDeposit: boolean;
  updateTime: number;
  accountType: string;
  balances: Balance2[];
  permissions: string[];
}

interface Balance2 {
  asset: string;
  free: string;
  locked: string;
  total?: number;
  updatedAt?: string;
  estimatedValue?: number;
}

interface Common {
  configuration: Configuration;
  accountInfo: AccountInfo;
  exchangeSymbols: string[];
}

interface AccountInfo {
  makerCommission: number;
  takerCommission: number;
  buyerCommission: number;
  sellerCommission: number;
  canTrade: boolean;
  canWithdraw: boolean;
  canDeposit: boolean;
  updateTime: number;
  accountType: string;
  balances: Balance[];
  permissions: string[];
}

interface Balance {
  asset: string;
  free: string;
  locked: string;
}

interface Configuration {
  _id: string;
  key: string;
  enabled: boolean;
  cronTime: string;
  symbols: string[];
  supportFIATs: string[];
  candles: Candles;
  buy: Buy;
  sell: Sell;
}

interface Sell {
  enabled: boolean;
  triggerPercentage: number;
  stopPercentage: number;
  limitPercentage: number;
}

interface Buy {
  enabled: boolean;
  maxPurchaseAmount: number;
  triggerPercentage: number;
  stopPercentage: number;
  limitPercentage: number;
}

interface Candles {
  interval: string;
  limit: number;
}
