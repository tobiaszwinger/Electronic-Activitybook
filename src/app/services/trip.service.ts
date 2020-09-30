import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Trip } from '../models/trip';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import 'rxjs/add/operator/map';

@Injectable()
export class TripService {
  tripsCollection: AngularFirestoreCollection<Trip>;
  trips: Observable<Trip[]>;
  tripDoc: AngularFirestoreDocument<Trip>;

  constructor(public afs: AngularFirestore) {
    this.tripsCollection = this.afs.collection('trips', ref => ref.orderBy('title', 'asc'));

    this.trips = this.tripsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Trip;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getTrips(): Observable<Trip[]> {
    return this.trips;
  }

  addTrip(trip: Trip): void {
    this.tripsCollection.add(trip);
  }

  deleteTrip(trip: Trip): void {
    this.tripDoc = this.afs.doc(`trips/${trip.id}`);
    this.tripDoc.delete();
  }

  updateTrip(trip: Trip): void {
    this.tripDoc = this.afs.doc(`trips/${trip.id}`);
    this.tripDoc.update(trip);
  }

}
