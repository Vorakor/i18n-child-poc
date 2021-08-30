import { IDetails, ISales, ITradeIn } from '../models';

export interface INew {
    vehicles: IDetails[];
    sales: ISales[];
    tradeins: ITradeIn[];
}
