import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-addtnavbar',
  templateUrl: './addtnavbar.component.html',
  styleUrls: ['./addtnavbar.component.css']
})

export class AddtnavbarComponent implements OnInit {

  constructor() { }

  trip = {
    title: '',
    datestart: '',
    dateend: ''
  };
  modeldateend: any;
  modeldatestart: any;
  @Output() uploadEmitter = new EventEmitter();
  @Output() submitEmitter = new EventEmitter();

  FormValidation = new FormControl('', [
    Validators.required,
  ]);
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {}

  onTitleChange(value: any): void {
    this.trip.title = value;
    this.upload();
  }

  onStartDateChange(value: any): void {
    this.trip.datestart = value;
  }

  onEndDateChange(value: any): void {
    this.trip.dateend = value;
    this.upload();
  }

  handleSubmit(): void {
    this.submitEmitter.emit();
  }

  upload(): void {
    this.uploadEmitter.emit(this.trip);
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
