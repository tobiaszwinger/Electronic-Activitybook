import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() opensideEmitter = new EventEmitter();

  openSidenav(){
    this.opensideEmitter.emit();
  }

}
