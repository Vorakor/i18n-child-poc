import { ICondition, IDetails, IPurchaseInformation } from '@child-poc/vehicle-details';
import { ISales } from './sales';
import { ITradeIn } from './tradeIn';

export interface IUsed {
    vehicles: IDetails[];
    sales: ISales[];
    tradeins: ITradeIn[];
    purchases: IPurchases[];
}

export interface IPurchases {
    vehicle: IDetails;
    purchaseInfo: IPurchaseInformation;
    condition: ICondition;
}
