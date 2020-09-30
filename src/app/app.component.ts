import { Component } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Electronic-Activitybook';
  opened = false;

  itemValue = '';
  items: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }

  onSubmit(): void {
    this.db.list('items').push({ content: this.itemValue});
    this.itemValue = '';
  }

  setOpen(): void {
    this.opened = !this.opened;
  }
}
