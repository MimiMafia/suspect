import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

public concertArray = [];

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://suspect-server.herokuapp.com/getMusic')
    .subscribe((response: any) => {
      console.log(response);
      this.concertArray = response;
    }, (error) => {

      console.log(error);
    });
  }

}
