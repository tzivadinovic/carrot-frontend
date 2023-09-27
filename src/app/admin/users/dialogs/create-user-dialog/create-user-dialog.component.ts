import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {User, UserControllerService} from "../../../../../openapi";
import {SnackbarService} from "../../../../../util/snackbar-handler";

@Component({
    selector: 'app-create-user-dialog',
    templateUrl: './create-user-dialog.component.html',
    styleUrls: ['./create-user-dialog.component.css']
})
export class CreateUserDialogComponent implements OnInit {
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

    constructor(private userService: UserControllerService,
                private dialogRef: MatDialogRef<CreateUserDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: User,
                private snackBarService: SnackbarService) {
    }

    ngOnInit(): void {
    }

    createUser() {
        if (this.form.valid) {
            this.userService.saveUserDTO(this.form.value).subscribe(() => {
                this.snackBarService.showSuccessSnackbar('Successfully created user');
                this.closeDialog();
            });
        }
    }

    closeDialog() {
        this.dialogRef.close(true);
    }
}
