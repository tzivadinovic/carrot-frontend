import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {
    City,
    CityControllerService,
    CountryControllerService,
} from "../../../../../openapi";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SnackbarService} from "../../../../../util/snackbar-handler";

@Component({
    selector: 'app-create-city-dialog',
    templateUrl: './create-city-dialog.component.html',
    styleUrls: ['./create-city-dialog.component.css']
})
export class CreateCityDialogComponent implements OnInit {
    form = new FormGroup({
        id: new FormControl(null),
        name: new FormControl(null),
        zipCode: new FormControl(null),
        country: new FormControl(null)
    });

    countries: City[] = [];

    constructor(private cityService: CityControllerService,
                private countryService: CountryControllerService,
                private dialogRef: MatDialogRef<CreateCityDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: City,
                private snackBarService: SnackbarService) {
    }

    ngOnInit(): void {
        this.getAllCountries();
    }

    createCity() {
        if (this.form.valid) {
            this.cityService.saveCity(this.form.value).subscribe(() => {
                this.snackBarService.showSuccessSnackbar('Successfully created city');
                this.closeDialog();
            });
        }
    }

    getAllCountries(): void {
        this.countryService.getAllCountries().subscribe(countries => {
            this.countries = countries;
        });
    }

    closeDialog() {
        this.dialogRef.close(true);
    }

}
