import { Component, OnInit } from '@angular/core';

import { Car } from '../car';
import { CarService } from '../car.service';

import { FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[];
  selectedCar: Car;
  getBackMenuIsVisible = false;
  carSelectedToGetBack: Car = null;

  form = new FormGroup({
    carSelector: new FormControl('')
  });

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCarsWithPromise().then(cars => this.cars = cars);
  }

  onSelect(car: Car): void {
    console.warn(car);
    this.selectedCar = car;
  }

  rent(car: Car): void {
    console.warn(car);
    this.carService.rent(car);
  }

  displayGetBack(): void{
    this.getBackMenuIsVisible = !this.getBackMenuIsVisible;
  }

  submit(){
    console.log(this.form.value);
    // this.carSelectedToGetBack = this.form.value;
  }

  changeCar(e) {
    console.log(e.target.value);
    this.carSelectedToGetBack = e.target.value;

  }

}
