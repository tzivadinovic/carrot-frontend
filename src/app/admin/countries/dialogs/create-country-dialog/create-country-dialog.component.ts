import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Municipality, CountryControllerService} from "../../../../../openapi";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SnackbarService} from "../../../../../util/snackbar-handler";

@Component({
    selector: 'app-create-country-dialog',
    templateUrl: './create-country-dialog.component.html',
    styleUrls: ['./create-country-dialog.component.css']
})
export class CreateCountryDialogComponent implements OnInit {
    form = new FormGroup({
        id: new FormControl(null),
        name: new FormControl(null)
    });

    constructor(private countryService: CountryControllerService,
                private dialogRef: MatDialogRef<CreateCountryDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: Municipality,
                private snackBarService: SnackbarService) {
    }

    ngOnInit(): void {
    }

    createCountry() {
        if (this.form.valid) {
            this.countryService.saveCountry(this.form.value).subscribe(() => {
                this.snackBarService.showSuccessSnackbar('Successfully created country');
                this.closeDialog();
            });
        }
    }

    closeDialog() {
        this.dialogRef.close(true);
    }

}
