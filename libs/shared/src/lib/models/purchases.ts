import { ICondition, IDetails, IPurchaseInformation } from '../models';

export interface IPurchases {
    vehicle: IDetails;
    purchaseInfo: IPurchaseInformation;
    condition: ICondition;
}
