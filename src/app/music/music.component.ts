import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {


  

public concertArray = [
  {
    title: 'Organic Fest',
    url: '../../assets/organicfest.jpg',
    date: 'August 10-12, 2018',
    location: 'Wilseyville, NORCAL',
    website: 'http://www.theorganicfest.com'
 },

 {
  title: 'Bukez Finest',
  url: '../../assets/Bukez Finezt.png',
  date: 'July 7th, 2020',
  location: 'Your moms house',
},

{
  title: 'Vegan Fest',
  url: '../../assets/organicfest.jpg',
  date: 'June 20th 2020',
  location: 'italy',
},

{
  title: 'Organic Fest',
  url: '../../assets/organicfest.jpg',
  date: 'August 10-12, 2018',
  location: 'Wilseyville, NORCAL',
},

{
  title: 'TXT CLUB',
  url: '../../assets/organicfest.jpg',
  date: 'Feb 12 2019',
  location: 'greece',
},

{
  title: 'Organic Fest',
  url: '../../assets/organicfest.jpg',
  date: 'August 10-12, 2018',
  location: 'Wilseyville, NORCAL',
},


  


]





  constructor() { }

  ngOnInit() {
  }

}
