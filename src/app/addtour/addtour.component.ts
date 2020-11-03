import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TripService} from '../services/trip.service';
import {FileSelectionComponent} from './file-selection/file-selection.component';
import {AddtnavbarComponent} from './addtnavbar/addtnavbar.component';
import {PersonTableComponent} from './person-table/person-table.component';

@Component({
  selector: 'app-addtour',
  templateUrl: './addtour.component.html',
  styleUrls: ['./addtour.component.css']
})
export class AddtourComponent implements OnInit {
  @ViewChild(FileSelectionComponent) childFileSelection: FileSelectionComponent;
  @ViewChild(AddtnavbarComponent) childNavbar: AddtnavbarComponent;
  @ViewChild(FileSelectionComponent) childFileSel: FileSelectionComponent;
  @ViewChild(PersonTableComponent) childPerson: PersonTableComponent;

  // tslint:disable-next-line:variable-name
  constructor(private _snackBar: MatSnackBar,
              private tripService: TripService) { }
  trip = {
    title: '',
    datestart: '',
    dateend: '',
    datetext: '',
    descrip: '',
    persons: [],
    days: []
  };

  imageUrl = null;
  ngOnInit(): void {}

  openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  submit(): void {
    // TODO: Only if successfull!
    this.tripService.addTrip(this.trip);
    this.childFileSelection.save();
    this.openSnackBar('Trip successfully saved!', 'close');

    // TODO:
    this.resetTrip();
  }

  resetTrip(): void {
    this.trip = {
      title: '',
      datestart: '',
      dateend: '',
      datetext: '',
      descrip: '',
      persons: [],
      days: []
    };
    this.imageUrl = null;
    this.childNavbar.reset();
    this.childFileSel.reset();
    this.childPerson.reset();
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
    this.trip.persons = persons;
  }

  getFromChild(trip: any): void {
    if (trip.datestart !== this.trip.datestart) {
      this.trip.days = [];
    }

    this.trip.title = trip.title;

    if (trip.datestart && trip.dateend){
      const datestartFormat = (trip.datestart.getDate() + '.' + (trip.datestart.getMonth() + 1) + '.' + trip.datestart.getFullYear());
      const dateendFormat = (trip.dateend.getDate() + '.' + (trip.dateend.getMonth() + 1) + '.' + trip.dateend.getFullYear());

      // TODO: to not remove tours when changing title
      // if (this.trip.datestart !== datestartFormat || this.trip.dateend !== dateendFormat) {

      this.trip.datestart = datestartFormat;
      this.trip.dateend = dateendFormat;

      const diffTime = (trip.dateend.getTime() - trip.datestart.getTime());
      const diffDays = diffTime / (1000 * 3600 * 24) + 1;

      if (this.trip.days.length !== diffDays){
        for (let i = 0; i < diffDays; i++){
          const startDate = new Date(trip.datestart);
          const currDate = new Date(startDate);
          currDate.setDate(startDate.getDate() + i);
          const currDateFormat = (currDate.getDate() + '.' + (currDate.getMonth() + 1) + '.' + currDate.getFullYear());

          this.trip.days.push({
            inc: i + 1,
            id: i,
            date: currDateFormat,
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

  getImage(image: any): void {
    this.imageUrl = image;
  }
}
