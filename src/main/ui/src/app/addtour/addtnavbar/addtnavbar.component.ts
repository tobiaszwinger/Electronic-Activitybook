import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";

@Component({
  selector: 'app-addtnavbar',
  templateUrl: './addtnavbar.component.html',
  styleUrls: ['./addtnavbar.component.css']
})

export class AddtnavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  trip = {
    title: "",
    datestart: "",
    dateend: ""
  }
  modeldateend: any;
  modeldatestart: any;
  @Output() uploadEmitter = new EventEmitter();
  @Output() submitEmitter = new EventEmitter();

  onTitleChange(value: any){
    this.trip.title = value;
    this.upload();
  }

  onStartDateChange(value: any){
    this.trip.datestart = value;
  }

  onEndDateChange(value: any){
    this.trip.dateend = value;
    this.upload();
  }

  handleSubmit(){
    this.submitEmitter.emit();
  }

  upload(){
    this.uploadEmitter.emit(this.trip);
  }

  FormValidation = new FormControl('', [
    Validators.required,
  ]);
  matcher = new MyErrorStateMatcher();

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
