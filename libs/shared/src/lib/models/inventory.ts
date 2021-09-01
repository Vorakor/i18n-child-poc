import { IDetails, ISales, ITradeIn, IPurchases } from '../models';

export interface IInventory {
    dealershipId: number;
    newVehicles: IDetails[];
    usedVehicles: IDetails[];
    sales: ISales[];
    tradeins: ITradeIn[];
    purchases: IPurchases[];
}
