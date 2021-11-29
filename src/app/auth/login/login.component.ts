import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form = new FormGroup({
        username: new FormControl('', null),
        password: new FormControl('', null)
    });

    passwordShown: boolean = false;

    showHidePassword(): void {
        this.passwordShown = !this.passwordShown;
    }

    constructor() {
    }

    ngOnInit(): void {
    }


}
