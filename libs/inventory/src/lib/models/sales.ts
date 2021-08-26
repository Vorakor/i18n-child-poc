import { IDetails, IPurchaseInformation } from '@child-poc/vehicle-details';

export interface ISales {
    vehicle: IDetails;
    purchaseInfo: IPurchaseInformation;
}
