import { IDetails } from '@child-poc/vehicle-details';
import { ISales } from './sales';
import { ITradeIn } from './tradeIn';

export interface INew {
    vehicles: IDetails[];
    sales: ISales[];
    tradeins: ITradeIn[];
}
