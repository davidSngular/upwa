import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  dogs: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http
      .get('https://dog.ceo/api/breeds/list/all')
      .subscribe(data => {
        // console.log(data);
        this.dogs = data;
      });
  }
}
