import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Electronic-Activitybook';
  opened = false;

  setOpen(): void {
    this.opened = !this.opened;
  }
}
