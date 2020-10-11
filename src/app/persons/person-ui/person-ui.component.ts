import { Component, OnInit } from '@angular/core';
import {PersonService} from '../../services/person.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-person-ui',
  templateUrl: './person-ui.component.html',
  styleUrls: ['./person-ui.component.css']
})
export class PersonUIComponent implements OnInit {

  constructor(private personService: PersonService,
              private _snackBar: MatSnackBar,
              private router: Router) { }

  addPerson;
  newPerson = {
    firstname: null,
    lastname: null,
  };

  ngOnInit(): void {
    this.addPerson = false;
  }

  onFirstnameChange(value: any): void {this.newPerson.firstname = value; }
  onLastnameChange(value: any): void {this.newPerson.lastname = value; }

  openAddPerson(): void {
    this.addPerson = true;
  }

  openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  handleSubmit(): void {
    if (this.newPerson.firstname && this.newPerson.lastname) {
      this.personService.addPerson(this.newPerson);
      this.addPerson = false;
      // TODO: The new person does not pass when uncomment
      // this.router.navigate(['./persons'])
      //   .then(() => {
      //     window.location.reload();
      //   });
    } else {
      this.openSnackBar('Please fill in data', 'close');
    }
  }
}
