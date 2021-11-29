import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({
    firstname: new FormControl('', null),
    lastname: new FormControl('', null),
    email: new FormControl('', null),
    username: new FormControl('', null),
    password: new FormControl('', null),
    repeatedPassword: new FormControl('', null)
  });

  passwordShown: boolean = false;

  showHidePassword(): void {
    this.passwordShown = !this.passwordShown;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
