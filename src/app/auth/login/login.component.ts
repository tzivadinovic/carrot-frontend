import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

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

    constructor() {
    }

    ngOnInit(): void {
    }

}
