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
    public vehicles$: Observable<IDetails[]> = this.loadVehicles();
    constructor(private http: HttpClient) {}

    loadVehicles(): Observable<IDetails[]> {
        return of(vehicles.vehicles);
    }

    setVehicle(id: number): void {
        console.log('Vehicle ID: ' + id);
        this.vehicles$
            .pipe(
                mergeMap((vehicles) => {
                    return vehicles.filter((vehicle) => vehicle.vehicleId == id);
                }),
                first()
            )
            .subscribe((vehicle: IDetails) => {
                console.log(vehicle);
                this._selectedVehicle.next(vehicle);
            });
    }
}
