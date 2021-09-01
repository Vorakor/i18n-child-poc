export interface IPurchaseInformation {
    condition: ICondition;
    MSRP: IPriceByCondition;
    cashDiscount: number; // percentage
    purchasePrice?: number;
    vehicleId: number;
}

export enum ICondition {
    'new' = 'New',
    'excellent' = 'Excellent',
    'veryGood' = 'Very Good',
    'used' = 'Used',
    'poor' = 'Poor',
    'notRunning' = 'Not Running'
}

export interface IPriceByCondition {
    new: number;
    excellent: number; // percentage of new
    veryGood: number; // percentage of excellent
    used: number; // percentage of veryGood
    poor: number; // percentage of used
    notRunning: number; // percentage of poor
}
