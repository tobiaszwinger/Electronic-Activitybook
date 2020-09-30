import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Type } from '../models/Type';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import 'rxjs/add/operator/map';

@Injectable()
export class TypeService {
  typesCollection: AngularFirestoreCollection<Type>;
  types: Observable<Type[]>;
  typeDoc: AngularFirestoreDocument<Type>;

  constructor(public afs: AngularFirestore) {
    this.typesCollection = this.afs.collection('types', ref => ref.orderBy('title', 'asc'));

    this.types = this.typesCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Type;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getTypes(): Observable<Type[]> {
    return this.types;
  }

  addType(type: Type): void {
    this.typesCollection.add(type);
  }

  deleteType(type: Type): void {
    this.typeDoc = this.afs.doc(`types/${type.id}`);
    this.typeDoc.delete();
  }

  updateType(type: Type): void {
    this.typeDoc = this.afs.doc(`types/${type.id}`);
    this.typeDoc.update(type);
  }

}
