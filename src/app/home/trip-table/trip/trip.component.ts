import {Component, Input, OnInit} from '@angular/core';
import {TripService} from '../../../services/trip.service';
import {AngularFireStorage} from "@angular/fire/storage";

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  constructor(private tripService: TripService,
              private storage: AngularFireStorage) { }
  @Input() trip;

  ngOnInit(): void {}

  deleteTour(trip): void {
    this.deleteImage(trip.title + trip.datestart + 'Image');
    this.tripService.deleteTrip(trip);
  }

  deleteImage(imageName): void {
    this.storage.storage.ref('Images/').child(imageName).delete();
  }
}
