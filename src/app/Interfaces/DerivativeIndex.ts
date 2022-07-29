export interface RecordedDerivativeIndex {
    _id: String,
    Date: String,
    Time: String,
    PEtotVol: number,
    CEtotVol: number,
    DiffVol: number,
    PEtotChangeInOI: number,
    CEtotChangeInOI: number,
    DiffChangeInOI: number,
    OPCR: number,
    PCR: number,
    Original_Price: String,
    Future_Price: number,
    Vwap_Price: number,
    __v: number
}

interface LiveDerivativeIndexArray {
    strikePrice: number,
    openInterest: number,
    changeinOpenInterest: number,
    totalTradedVolume: number,
    lastPrice: number,
    impliedVolatility: number
}

export interface LiveDerivativeIndex {
    _id: String,
    Date: String,
    Time: String,
    PEtotOI: number,
    CEtotOI: number,
    PEtotVol: number,
    CEtotVol: number,
    PEtotChangeInOI: number,
    CEtotChangeInOI: number,
    Pdata: LiveDerivativeIndexArray[],
    Cdata: LiveDerivativeIndexArray[]
    __v: number
}