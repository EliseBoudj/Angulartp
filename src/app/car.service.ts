import { Injectable } from '@angular/core';

import { Car } from './car';

export const CARS: Car[] = [
  { id: 0, plateNumber: "11AA22", model: 'Ferrari', price: 1500, numberOfDays: 0, rented: false },
  { id: 1, plateNumber: "22BB33", model: 'Porsche', price: 1200, numberOfDays: 0, rented: false },
  { id: 2, plateNumber: "44CC55", model: 'Mac Laren', price: 1000, numberOfDays: 0, rented: false }
];

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars: Car[] = CARS;

  getCarsWithPromise(): Promise<Car[]> {
    return Promise.resolve(this.cars);
  }

  rent(car: Car){
    const index = this.cars.findIndex(obj => obj.plateNumber === car.plateNumber);
    console.warn(car.plateNumber);
    if (index > -1) {
      this.cars.splice(index, 1);
    }
  }

}
