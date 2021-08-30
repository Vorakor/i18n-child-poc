import { ICondition, IDetails, IPurchaseInformation, ISales, ITradeIn } from '../models';

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
