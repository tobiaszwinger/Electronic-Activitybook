import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  constructor(private http : HttpClient, private _snackBar: MatSnackBar){ }

  @Input() tour;
  newtour = {
    id: "",
    dayid: "",
    title: "",
    durat: "",
    duratup: "",
    starttime: "",
    location: "",
    descrip: "",
    peakheight: "",
    altidiff: "",
    kilometre: "",
    difficulty: "",
    ropes: "",
  }
  @Output() uploadEmitter = new EventEmitter();
  @Output() delEmitter = new EventEmitter();
  types = [];
  mainType = "Aktivität";
  connected;

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  connect(){
    this.http.get('http://localhost:8080/api/type')
      .subscribe((response: any) => {
        if(response.length > 0) this.connected = true;
        for (let i = 0; i < response.length; i++) {
          this.types.push(response[i].title);
        }
      });
  }

  getFromChild(value: any){
    value.id = this.tour.id;
    this.newtour = value;
    this.upload();
  }

  upload(){
    this.uploadEmitter.emit(this.newtour);
  }

  ngOnInit(): void {
    this.connected = false;
    this.connect();
    /*if (!this.connected) {
      this.openSnackBar("Keine Verbindung zum Backend!", "Schließen");
      this.deleteTour();
      this.connect();
    }*/
  }

  deleteTour(){
    this.delEmitter.emit(this.tour);
  }

  selectionSet(selection: any){
    this.mainType = selection;
  }

}
