import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ErrorStateMatcher} from "@angular/material/core";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  @Input() type;
  @Output() uploadEmitter = new EventEmitter();
  tour = {
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

  FormValidation = new FormControl('', [
    Validators.required,
  ]);
  matcher = new MyErrorStateMatcher();

  onTitleChange(value: any) {this.tour.title = value; this.upload()}
  onDuratChange(value: any) {this.tour.durat = value; this.upload()}
  onDuratupChange(value: any) {this.tour.duratup = value; this.upload()}
  onStarttimeChange(value: any) {this.tour.starttime = value; this.upload()}
  onLocationChange(value: any) {this.tour.location = value; this.upload()}
  onDescripChange(value: any) {this.tour.descrip = value; this.upload()}
  onPeakheightChange(value: any) {this.tour.peakheight = value; this.upload()}
  onAltidiffChange(value: any) {this.tour.altidiff = value; this.upload()}
  onKilometreChange(value: any) {this.tour.kilometre = value; this.upload()}
  onDifficultyChange(value: any) {this.tour.difficulty = value; this.upload()}
  onRopesChange(value: any) {this.tour.ropes = value; this.upload()}

  upload(){
    this.uploadEmitter.emit(this.tour);
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
