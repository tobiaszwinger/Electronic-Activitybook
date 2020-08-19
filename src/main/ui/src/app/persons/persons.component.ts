import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  constructor(private http : HttpClient) { }

  persons = [];

  ngOnInit(): void {
    this.connect();
  }

  connect(){
    let data = [{firstn: "tobi", lastn: "test"},{}]
    this.http.get('http://localhost:8080/api/persons')
      .subscribe((response: any) => {
        for(let i = 0; i < response.length; i++) {
          data.push({
            firstn: response[i].firstn,
            lastn: response[i].lastn,
          });
        }
      });
    /*data = [
      {firstn: "tobi", lastn: "test"},
      {firstn: "tobi", lastn: "test"},
      {firstn: "tobi", lastn: "test"},
      {firstn: "tobi", lastn: "test"},
    ]*/
    console.log(data);
    this.persons = data;
  }

}
