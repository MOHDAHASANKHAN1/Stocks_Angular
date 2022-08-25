export interface OHLType {
  symbol: String;
  open: number;
  dayHigh: number;
  dayLow: number;
  lastPrice: number;
  totalTradedVolume: number;
  totalTradedValue: number;
  change: number;
  pChange: number;
  OhlType: String;
  isGainers: String;
  GainersType: String;
  isMostActive: String;
  ActiveType: String;
  Date: String;
}

export interface OHL {
  OHWN: OHLType[];
  OLWN: OHLType[];
  OHWTN: OHLType[];
  OLWTN: OHLType[];
  Date: String;
}

export interface MASType {
  symbol: String;
  open: number;
  dayHigh: number;
  dayLow: number;
  lastPrice: number;
  totalTradedVolume: number;
  totalTradedValue: number;
  change: number;
  pChange: number;
  isGainers: String;
  GainersType: String;
  ActiveType: String;
  isFNO: String;
  isNifty50: String;
  Date: String;
}

export interface MAS {
  MostActivebyValue: MASType[];
  MostActivebyVolume: MASType[];
  Date: String;
}

export interface TGNLType {
  symbol: String;
  open: number;
  dayHigh: number;
  dayLow: number;
  lastPrice: number;
  totalTradedVolume: number;
  totalTradedValue: number;
  change: number;
  pChange: number;
  GainersType: String;
  isMostActive: String;
  ActiveType: String;
  isFNO: String;
  isNifty50: String;
  Date: String;
}

export interface TGNL {
  TopGainers: TGNLType[];
  TopLoosers: TGNLType[];
  Date: String;
}
