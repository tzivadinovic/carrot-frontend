import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Municipality, CountryControllerService} from "../../../../../openapi";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SnackbarService} from "../../../../../util/snackbar-handler";

@Component({
    selector: 'app-edit-country-dialogs',
    templateUrl: './edit-country-dialog.component.html',
    styleUrls: ['./edit-country-dialog.component.css']
})
export class EditCountryDialogComponent implements OnInit {
    form = new FormGroup({
        id: new FormControl(null),
        name: new FormControl(null)
    });

    country: Municipality;
    countries: Municipality[] = [];

    constructor(private countryService: CountryControllerService,
                private dialogRef: MatDialogRef<EditCountryDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: Municipality,
                private snackBarService: SnackbarService) {
        this.country = data;
    }

    ngOnInit(): void {
        this.form.get('name')?.setValue(this.country.name);
    }

    editCountry() {
        const category: Municipality = this.form.value;
        category.id = this.data.id;
        if (this.form.valid) {
            this.countryService.updateCountry(category).subscribe(() => {
                this.getAllCountries();
                this.closeDialog();
                this.snackBarService.showSuccessSnackbar('Successfully edited country');
            });
        } else {
            this.snackBarService.showErrorSnackbar('Invalid form');
        }
    }

    getAllCountries(): void {
        this.countryService.getAllCountries().subscribe(data => {
            this.countries = data;
        });
    }

    closeDialog() {
        this.dialogRef.close(true);
    }

}
