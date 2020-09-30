import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  @Input() type;
  @Output() uploadEmitter = new EventEmitter();
  tour = {
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

  FormValidation = new FormControl('', [
    Validators.required,
  ]);
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {}

  onTitleChange(value: any): void {this.tour.title = value; this.upload(); }
  onDuratChange(value: any): void {this.tour.durat = value; this.upload(); }
  onDuratupChange(value: any): void {this.tour.duratup = value; this.upload(); }
  onStarttimeChange(value: any): void {this.tour.starttime = value; this.upload(); }
  onLocationChange(value: any): void {this.tour.location = value; this.upload(); }
  onDescripChange(value: any): void {this.tour.descrip = value; this.upload(); }
  onPeakheightChange(value: any): void {this.tour.peakheight = value; this.upload(); }
  onAltidiffChange(value: any): void {this.tour.altidiff = value; this.upload(); }
  onKilometreChange(value: any): void {this.tour.kilometre = value; this.upload(); }
  onDifficultyChange(value: any): void {this.tour.difficulty = value; this.upload(); }
  onRopesChange(value: any): void {this.tour.ropes = value; this.upload(); }

  upload(): void {
    this.uploadEmitter.emit(this.tour);
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
