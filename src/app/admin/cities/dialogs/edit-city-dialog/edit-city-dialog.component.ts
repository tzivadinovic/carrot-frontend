import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {City, CityControllerService, CountryControllerService} from "../../../../../openapi";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SnackbarService} from "../../../../../util/snackbar-handler";

@Component({
    selector: 'app-edit-city-dialog',
    templateUrl: './edit-city-dialog.component.html',
    styleUrls: ['./edit-city-dialog.component.css']
})
export class EditCityDialogComponent implements OnInit {

    form = new FormGroup({
        id: new FormControl(null),
        name: new FormControl(null),
        zipCode: new FormControl(null),
        country: new FormControl(null)
    });

    cities: City[] = [];
    city: City;

    constructor(private cityService: CityControllerService,
                private countryService: CountryControllerService,
                private dialogRef: MatDialogRef<EditCityDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: City,
                private snackBarService: SnackbarService) {
        this.city = data;
    }

    ngOnInit(): void {
        this.getAllCountries();
        this.form.get('name')?.setValue(this.data.name);
        this.form.get('zipCode')?.setValue(this.data.zipCode);
        this.form.get('country')?.setValue(this.data.country);
    }

    editCity() {
        const city: City = this.form.value;
        city.id = this.data.id;
        if (this.form.valid) {
            this.cityService.updateCity(this.form.value).subscribe(() => {
                this.snackBarService.showSuccessSnackbar('Successfully edited city');
                this.closeDialog();
            });
        }
    }

    getAllCountries(): void {
        this.countryService.getAllCountries().subscribe(countries => {
            this.cities = countries;
        });
    }

    closeDialog() {
        this.dialogRef.close(true);
    }

    compareCountry(c1: City, c2: City): boolean {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
}
