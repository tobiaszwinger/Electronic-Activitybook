import { Component, OnInit } from '@angular/core';
import {TripService} from '../../services/trip.service';

@Component({
  selector: 'app-trip-table',
  templateUrl: './trip-table.component.html',
  styleUrls: ['./trip-table.component.css']
})
export class TripTableComponent implements OnInit {

  constructor(private tripService: TripService) { }

  trips;
  isDataLoaded = false;

  ngOnInit(): void {
    this.tripService.getTrips().subscribe(trips => {
      this.trips = trips;
      this.isDataLoaded = true;
    });
  }


}
