export interface OHLType {
    symbol: String,
    open: number,
    dayHigh: number,
    dayLow: number,
    lastPrice: number,
    totalTradedVolume: number,
    totalTradedValue: number,
    change: number,
    pChange: number,
    OhlType: String,
    isGainers: String,
    GainersType: String,
    isMostActive: String,
    ActiveType: String
}

export interface OHL {
    OHWN: OHLType[],
    OLWN: OHLType[],
    OHWTN: OHLType[],
    OLWTN: OHLType[]
}

export interface MASType {
    symbol: String,
    open: number,
    dayHigh: number,
    dayLow: number,
    lastPrice: number,
    totalTradedVolume: number,
    totalTradedValue: number,
    change: number,
    pChange: number,
    isGainers: String,
    GainersType: String,
    ActiveType: String,
    isFNO: String,
    isNifty50: String
}

export interface MAS {
    MostActivebyValue: MASType[],
    MostActivebyVolume: MASType[]
}

export interface TGNLType {
    symbol: String,
    open: number,
    dayHigh: number,
    dayLow: number,
    lastPrice: number,
    totalTradedVolume: number,
    totalTradedValue: number,
    change: number,
    pChange: number,
    GainersType: String,
    isMostActive: String,
    ActiveType: String,
    isFNO: String,
    isNifty50: String
}

export interface TGNL {
    TopGainers: TGNLType[],
    TopLoosers: TGNLType[]
}