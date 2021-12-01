import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
    form = new FormGroup({
        firstName: new FormControl('', null),
        lastName: new FormControl('', null),
        phone: new FormControl('', null),
        birthDate: new FormControl('', null),
        email: new FormControl('', null)
    });

    constructor() {
    }

    ngOnInit(): void {
    }

}
