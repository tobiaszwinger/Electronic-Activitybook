import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PersonService} from '../../services/person.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.css']
})
export class PersonTableComponent implements OnInit {
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  @Output() uploadEmitter = new EventEmitter();
  persons;
  selectedPersons = [];
  isDataLoaded = false;

  constructor(private personService: PersonService) {
  }

  ngOnInit(): void {
    this.personService.getPersons().subscribe(persons => {
      this.persons = persons;
      this.isDataLoaded = true;
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.persons.filter(
      option => option.firstname.toLowerCase().includes(filterValue) ||
      option.lastname.toLowerCase().includes(filterValue) ||
      (option.firstname.toLowerCase() + ' ' + option.lastname.toLowerCase()).includes(filterValue));
  }

  onSelectionChanged(person): void {
    if (!this.selectedPersons.includes(person)){
      this.selectedPersons.push(person);
      this.myControl.setValue('');
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
      this.upload();
    }
  }

  upload(): void {
    this.uploadEmitter.emit(this.selectedPersons);
  }

  removePerson(person): void {
    const index: number = this.selectedPersons.indexOf(person);
    if (index !== -1) {
      this.selectedPersons.splice(index, 1);
    }
    this.upload();
  }
}
