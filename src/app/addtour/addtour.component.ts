import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {DayComponent} from './day/day.component';
import {TripService} from '../services/trip.service';

@Component({
  selector: 'app-addtour',
  templateUrl: './addtour.component.html',
  styleUrls: ['./addtour.component.css']
})
export class AddtourComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,
              private tripService: TripService) { }

  // basic layout
  /*
  trip = {
    title: "",
    datestart: "",
    dateend: "",
    descrip: "",
    persons: [{
      firstn: "",
      lastn: "",
    }],
    days: [{
      date: "",
      weather: "",
      trip_id: "",
      tours: [{
        title: "",
        durat: "",
        duartup: "",
        starttime: "",
        location: "",
        descrip: "",
        peakheight: "",
        altidiff: "",
        kilometre: "",
        difficulty: "",
        ropes: "",
        day_id: "",
        type_id: "",
      }]
    }]
  }
  */

  trip = {
    title: '',
    datestart: '',
    dateend: '',
    datetext: '',
    descrip: '',
    persons: [],
    days: []
  };

  ngOnInit(): void {}

  openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  submit(): void {
    this.openSnackBar('Trip successfully saved!', 'close');
    console.log(this.trip);
    this.tripService.addTrip(this.trip);
  }

  getFromChildTour(tour: any): void {
    let set = false;
    for (let i = 0; i < this.trip.days[tour.dayid].tours.length; i++){
      if (this.trip.days[tour.dayid].tours[i].id === tour.id){
        this.trip.days[tour.dayid].tours[i] = tour;
        set = true;
      }
    }
    if (!set) {
      this.trip.days[tour.dayid].tours.push(tour);
    }
  }

  getPersons(persons): void {
    // console.log(persons);
  }

  getFromChild(trip: any): void {
    if (trip.datestart !== this.trip.datestart) {
      this.trip.days = [];
    }

    this.trip.title = trip.title;

    if (trip.datestart !== null && trip.dateend !== null){
      const datestartFormat = (trip.datestart.getDate() + '.' + (trip.datestart.getMonth() + 1) + '.' + trip.datestart.getFullYear());
      const dateendFormat = (trip.dateend.getDate() + '.' + (trip.dateend.getMonth() + 1) + '.' + trip.dateend.getFullYear());

      // TODO: to not remove tours when changing title
      // if (this.trip.datestart !== datestartFormat || this.trip.dateend !== dateendFormat) {

      this.trip.datestart = datestartFormat;
      this.trip.dateend = dateendFormat;

      const addDays = (date, days = 1) => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
      };

      const dateRange = (start, end, range2 = []) => {
        if (start > end) { return range2; }
        const next = addDays(start, 1);
        return dateRange(next, end, [...range2, start]);
      };

      const diffTime = (trip.dateend.getTime() - trip.datestart.getTime());
      const diffDays = diffTime / (1000 * 3600 * 24);

      let range;
      if (this.trip.days.length !== diffDays + 1){
        range = dateRange(new Date(datestartFormat), new Date(dateendFormat));
        for (let i = 0; i <= diffDays; i++){
          range[i].setDate(range[i].getDate() + 1);
          this.trip.days.push({
            inc: i + 1,
            id: i,
            date: range[i].toISOString().slice(0, 10),
            tours: this.trip.days[i] && this.trip.days[i].tours ? this.trip.days[i].tours : [],
            weather: '',
          });
        }
      }
    }
  }

  onDescripChange(value: any): void {
    this.trip.descrip = value;
  }

  getFromChildWeather(data: any): void {
    this.trip.days[data.idday].weather = data.weather;
  }
}
