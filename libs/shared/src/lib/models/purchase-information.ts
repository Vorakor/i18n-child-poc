import { IDetails } from '../models';

export interface IPurchaseInformation {
    condition: ICondition;
    MSRP: IPriceByCondition;
    cashDiscount: number; // percentage
    purchasePrice?: number;
    vehicle: IDetails;
}

export enum ICondition {
    'New',
    'Excellent',
    'Very Good',
    'Used',
    'Poor',
    'Not Running'
}

export interface IPriceByCondition {
    new: number;
    excellent: number; // percentage of new
    veryGood: number; // percentage of excellent
    used: number; // percentage of veryGood
    poor: number; // percentage of used
    notRunning: number; // percentage of poor
}
