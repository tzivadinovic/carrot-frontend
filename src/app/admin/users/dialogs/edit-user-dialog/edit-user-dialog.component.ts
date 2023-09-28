import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {User, UserControllerService} from "../../../../../openapi";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SnackbarService} from "../../../../../util/snackbar-handler";

@Component({
    selector: 'app-edit-user-dialogs',
    templateUrl: './edit-user-dialog.component.html',
    styleUrls: ['./edit-user-dialog.component.css']
})
export class EditUserDialogComponent implements OnInit {
    form = new FormGroup({
        user: new FormGroup({
            firstName: new FormControl(null),
            lastName: new FormControl(null),
            phoneNumber: new FormControl(null),
            username: new FormControl(null),
            email: new FormControl(null),
        }),
        isAdmin: new FormControl(false)
    });

    user: User;
    users: User[] = [];

    constructor(private dialogRef: MatDialogRef<EditUserDialogComponent>,
                private snackBarService: SnackbarService,
                private userService: UserControllerService,
                @Inject(MAT_DIALOG_DATA) public data: User) {
        this.user = data;
    }

    ngOnInit(): void {
        this.form.controls['user'].get('firstName')?.setValue(this.user.firstName);
        this.form.controls['user'].get('lastName')?.setValue(this.user.lastName);
        this.form.controls['user'].get('phoneNumber')?.setValue(this.user.phoneNumber);
        this.form.controls['user'].get('username')?.setValue(this.user.username);
        this.form.controls['user'].get('email')?.setValue(this.user.email);

        // if (this.user.role?.name === 'ADMIN') {
        //     this.form?.get('isAdmin')?.setValue(true);
        // }
    }

    editUser() {
        const user: User = this.form.controls['user'].value
        user.id = this.data.id;
        if (this.form.valid) {
            this.userService.updateUser(user).subscribe(() => {
                this.getAllUsers();
                this.closeDialog();
                this.snackBarService.showSuccessSnackbar('Successfully edited user');
            });
        } else {
            this.snackBarService.showErrorSnackbar('Invalid form');
        }
    }

    getAllUsers(): void {
        this.userService.getAllUsers().subscribe(data => {
            this.users = data;
        });
    }

    closeDialog() {
        this.dialogRef.close(true);
    }


}
