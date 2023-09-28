import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {
    City,
    CityControllerService,
    Municipality,
    MunicipalityControllerService
} from "../../../../../openapi";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SnackbarService} from "../../../../../util/snackbar-handler";

@Component({
    selector: 'app-create-municipality-dialogs',
    templateUrl: './create-municipality-dialog.component.html',
    styleUrls: ['./create-municipality-dialog.component.css']
})
export class CreateMunicipalityDialogComponent implements OnInit {
    form = new FormGroup({
        id: new FormControl(null),
        name: new FormControl(null),
        city: new FormControl(null)
    });

    cities: City[] = [];

    constructor(private cityService: CityControllerService,
                private municipalityService: MunicipalityControllerService,
                private dialogRef: MatDialogRef<CreateMunicipalityDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: Municipality,
                private snackBarService: SnackbarService) {
    }

    ngOnInit(): void {
        this.getAllCities();
    }

    createMunicipality() {
        if (this.form.valid) {
            this.municipalityService.saveMunicipality(this.form.value).subscribe(() => {
                this.snackBarService.showSuccessSnackbar('Successfully created municipality');
                this.closeDialog();
            });
        }
    }

    getAllCities(): void {
        this.cityService.getAllCities().subscribe(cities => {
            this.cities = cities;
        });
    }

    closeDialog() {
        this.dialogRef.close(true);
    }

}
