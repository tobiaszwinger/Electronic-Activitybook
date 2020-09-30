import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PersonService} from '../services/person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  constructor(private http: HttpClient,
              private personService: PersonService) { }

  isDataLoaded = false;
  persons = [];

  ngOnInit(): void {
    this.personService.getPersons().subscribe(persons => {
      this.persons = persons;
      this.isDataLoaded = true;
    });
  }
}
