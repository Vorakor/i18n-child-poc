import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import * as data from './data/inventory.json';
import { ISales, ITradeIn, IInventory, ICondition, IPurchases, IDetails } from './models';

@Injectable({
    providedIn: 'root'
})
export class InventoryService implements OnDestroy {
    private _inventory: BehaviorSubject<IInventory> = new BehaviorSubject<IInventory>({} as IInventory);
    public inventory$: Observable<IInventory> = this._inventory.asObservable();
    private _selectedDealership: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public selectedDealership$: Observable<number> = this._selectedDealership.asObservable();
    private _subs: Subscription[] = [];

    constructor() {
        const selDel = this.selectedDealership$.subscribe((dealershipId: number) => {
            this.loadInventory(dealershipId);
        });
        this._subs.push(selDel);
    }

    setDealership(dealershipId: number) {
        this._selectedDealership.next(dealershipId);
    }

    loadInventory(dealershipId: number) {
        const dealerInventory: IInventory = data.inventory
            .map((inv: any) => {
                if (inv.sales.length > 0) {
                    inv.sales.map((sale: any) => {
                        const vehicle = sale.vehicle;
                        const prInfo = sale.purchaseInfo;
                        const condition = this._convertCondition(prInfo.condition);
                        prInfo.condition = condition;
                        return {
                            vehicle: vehicle,
                            purchaseInfo: prInfo
                        } as ISales;
                    });
                }
                if (inv.purchases.length > 0) {
                    inv.purchases.map((purch: any) => {
                        const vehicle = purch.vehicle;
                        const prInfo = purch.purchaseInfo;
                        const condition = this._convertCondition(prInfo.condition);
                        prInfo.condition = condition;
                        return {
                            vehicle: vehicle,
                            purchaseInfo: prInfo,
                            condition: condition
                        } as IPurchases;
                    });
                }
                if (inv.tradeins.length > 0) {
                    inv.tradeins.map((trade: any) => {
                        const vehicle = trade.vehicle;
                        const condition = this._convertCondition(trade.condition);
                        return { vehicle: vehicle, condition: condition } as ITradeIn;
                    });
                }
                return { ...inv } as IInventory;
            })
            .filter((inv: IInventory) => inv.dealershipId == dealershipId)[0];
        this._inventory.next(dealerInventory);
    }

    getVehicleInventory(dealershipId: number): IDetails[] {
        const selectedInv = data.inventory.find((inv) => inv.dealershipId == dealershipId);
        if (!selectedInv) {
            return [];
        } else {
            const dealerInventory: IDetails[] = [...selectedInv.newVehicles, ...selectedInv.usedVehicles];
            return dealerInventory;
        }
    }

    _convertCondition(condition: string): ICondition {
        switch (condition) {
            case 'new':
                return ICondition.new;
            case 'excellent':
                return ICondition.excellent;
            case 'veryGood':
                return ICondition.veryGood;
            case 'used':
                return ICondition.used;
            case 'poor':
                return ICondition.poor;
            default:
                return ICondition.notRunning;
        }
    }

    ngOnDestroy() {
        this._subs.forEach((subscription) => subscription.unsubscribe());
    }
}
