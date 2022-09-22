import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tforms',
  templateUrl: './tforms.component.html',
  styleUrls: ['./tforms.component.css']
})
export class TformsComponent implements OnInit {

  genders=['Male','Female'];
  defaultSecret='pet';
  submitted=false;

  user={
    username: '',
    email: '',
    gender: '',
    secret: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.user.username = form.value.username;
    this.user.email = form.value.email;
    this.user.gender = form.value.gender;
    this.user.secret = form.value.secret;
    this.submitted=true;
    form.reset();
  }
}
