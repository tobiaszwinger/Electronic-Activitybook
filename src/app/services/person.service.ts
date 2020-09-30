import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Person } from '../models/person';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonService {
  personsCollection: AngularFirestoreCollection<Person>;
  persons: Observable<Person[]>;
  personDoc: AngularFirestoreDocument<Person>;

  constructor(public afs: AngularFirestore) {
    this.personsCollection = this.afs.collection('persons', ref => ref.orderBy('lastname', 'asc'));

    this.persons = this.personsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Person;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getPersons(): Observable<Person[]> {
    return this.persons;
  }

  addPerson(person: Person): void {
    this.personsCollection.add(person);
  }

  deletePerson(person: Person): void {
    this.personDoc = this.afs.doc(`persons/${person.id}`);
    this.personDoc.delete();
  }

  updatePerson(person: Person): void {
    this.personDoc = this.afs.doc(`persons/${person.id}`);
    this.personDoc.update(person);
  }

}
