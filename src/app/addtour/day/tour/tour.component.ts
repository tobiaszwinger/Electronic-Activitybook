import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TypeService} from '../../../services/type.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  constructor(private http: HttpClient,
              private _snackBar: MatSnackBar,
              private typeService: TypeService){ }

  @Input() tour;
  mainType = '';
  newtour = {
    id: '',
    dayid: '',
    type: '',
    title: '',
    durat: '',
    duratup: '',
    starttime: '',
    location: '',
    descrip: '',
    peakheight: '',
    altidiff: '',
    kilometre: '',
    difficulty: '',
    ropes: '',
  };
  @Output() uploadEmitter = new EventEmitter();
  @Output() delEmitter = new EventEmitter();
  types = [];
  connected;

  openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  getFromChild(value: any): void{
    value.id = this.tour.id;
    value.type = this.mainType;
    this.newtour = value;
    this.upload();
  }

  upload(): void {
    this.uploadEmitter.emit(this.newtour);
  }

  ngOnInit(): void {
    this.connected = false;
    this.typeService.getTypes().subscribe(types => {
      this.types = types;
      if (types.length === 0) {
        this.openSnackBar('No connection to firebase or no data found!', 'close');
        this.deleteTour();
      }
    });
  }

  deleteTour(): void{
    this.delEmitter.emit(this.tour);
  }

  onActivationChange(value: any): void {
    this.mainType = value;
  }
}
