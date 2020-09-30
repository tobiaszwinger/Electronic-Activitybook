import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {DayComponent} from './day/day.component';
import {TripService} from "../services/trip.service";
import {TypeService} from "../services/type.service";

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

  getFromChild(trip: any): void {
    if (trip.datestart !== this.trip.datestart) {
      this.trip.days = [];
    }

    this.trip.title = trip.title;

    if (trip.datestart !== null && trip.dateend !== null){
      const datestartFormat = trip.datestart.getFullYear() + '-' + (trip.datestart.getMonth() + 1) + '-' + (trip.datestart.getDate());
      const dateendFormat = trip.dateend.getFullYear() + '-' + (trip.dateend.getMonth() + 1) + '-' + (trip.dateend.getDate());

      this.trip.datestart = datestartFormat;
      this.trip.dateend = dateendFormat;

      const addDays = (date, days = 1) => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
      };

      const dateRange = (start, end, range = []) => {
        if (start > end) { return range; }
        const next = addDays(start, 1);
        return dateRange(next, end, [...range, start]);
      };

      const diffTime = (trip.dateend.getTime() - trip.datestart.getTime());
      const diffDays = diffTime / (1000 * 3600 * 24);

      let range;
      if (this.trip.days.length !== diffDays + 1){
        try {
          range = dateRange(new Date(datestartFormat), new Date(dateendFormat));
          for (let i = 0; i <= diffDays; i++){
            range[i].setDate(range[i].getDate() + 1);
            this.trip.days.push({
              inc: i + 1,
              id: i,
              date: range[i].toISOString().slice(0, 10),
              tours: [],
              weather: '',
            });
          }
        }
        catch (e) {
          this.openSnackBar('Zeitraum hat nicht funktioniert', 'Schließen');
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
