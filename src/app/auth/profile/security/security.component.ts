import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  form = new FormGroup({
    oldPassword: new FormControl('', null),
    newPassword: new FormControl('', null),
    newRepeatedPassword: new FormControl('', null)
  });

  passwordShown: boolean = false;

  showHidePassword(): void {
    this.passwordShown = !this.passwordShown;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
