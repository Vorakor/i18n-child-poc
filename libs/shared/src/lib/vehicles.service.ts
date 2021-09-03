import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDetails } from './models';
import * as vehicles from './data/vehicles.json';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { first, mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class VehiclesService {
    private _selectedVehicle: BehaviorSubject<IDetails> = new BehaviorSubject<IDetails>({} as IDetails);
    public selectedVehicle$: Observable<IDetails> = this._selectedVehicle.asObservable();
    private _vehicles: BehaviorSubject<IDetails[]> = new BehaviorSubject<IDetails[]>(null);
    public vehicles$: Observable<IDetails[]> = this._vehicles.asObservable();
    constructor(private http: HttpClient) {}

    loadVehicles(): void {
        this._vehicles.next(vehicles.vehicles);
    }

    setVehicle(id: number): void {
        this.vehicles$
            .pipe(
                mergeMap((vehicles) => {
                    return vehicles.filter((vehicle) => vehicle.vehicleId == id);
                }),
                first()
            )
            .subscribe((vehicle: IDetails) => {
                this._selectedVehicle.next(vehicle);
            });
    }
}
