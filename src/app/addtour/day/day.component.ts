import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  constructor() { }
  @Input() day;
  @Output() uploadEmitter = new EventEmitter();
  @Output() uploadWeatherEmitter = new EventEmitter();
  tours = [];
  tourinc;
  tourid;

  ngOnInit(): void {
    this.tourinc = 1;
    this.tourid = 0;
  }

  addTour(){
    this.tours.push({
      inc: this.tourinc,
      id: this.tourid
    })
    this.tourinc++;
    this.tourid++;
  }

  delTour(tour: any) {
    for(let i = 0; i < this.tours.length; i++){
      if(this.tours[i].inc == tour.inc)
        this.tours.splice(i, 1);
    }
    for(let i = 0; i < this.tours.length; i++)
      this.tours[i].inc = i+1
    this.tourinc = this.tours.length+1;
  }

  getFromChild(tour: any){
    tour.dayid = this.day.id;
    this.upload(tour);
  }

  upload(tours: any){
    this.uploadEmitter.emit(tours);
  }

  onWeatherChange(value: any) {
    let data = {
      weather: value,
      idday: this.day.id,
    }
    this.uploadWeatherEmitter.emit(data)
  }
}
