import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']

})
export class ContactComponent implements OnInit {
  public success = false;
  public submitting = false;
  public contact = {
    fullName: '',
    email: '',
    comments: '',

  };

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  submit() {
    this.submitting = true;
    this.http.post('http://localhost:8080/sendEmail', this.contact)
    .subscribe( (response: any) => {
      console.log(response);
      this.submitting = false;
      this.success =true;
    }, (error) => { 
      console.log( error);
      this.submitting = false;
  });
  
  }
}