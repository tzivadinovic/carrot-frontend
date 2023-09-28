import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {
    CityControllerService,
    City,
    Municipality,
    MunicipalityControllerService
} from "../../../../../openapi";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SnackbarService} from "../../../../../util/snackbar-handler";

@Component({
    selector: 'app-edit-municipality-dialogs',
    templateUrl: './edit-municipality-dialog.component.html',
    styleUrls: ['./edit-municipality-dialog.component.css']
})
export class EditMunicipalityDialogComponent implements OnInit {
    form = new FormGroup({
        id: new FormControl(null),
        name: new FormControl(null),
        city: new FormControl(null)
    });

    municipalities: Municipality[] = [];
    municipality: Municipality;
    cities: City[] = [];

    constructor(private cityService: CityControllerService,
                private municipalityService: MunicipalityControllerService,
                private dialogRef: MatDialogRef<EditMunicipalityDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: Municipality,
                private snackBarService: SnackbarService) {
        this.municipality = data;
    }

    ngOnInit(): void {
        this.getAllCities();
        this.form.get('name')?.setValue(this.data.name);
        this.form.get('city')?.setValue(this.data.city);
    }

    editMunicipality() {
        const municipality: Municipality = this.form.value;
        municipality.id = this.data.id;
        if (this.form.valid) {
            this.municipalityService.updateMunicipality(this.form.value).subscribe(() => {
                this.snackBarService.showSuccessSnackbar('Successfully edited municipality');
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

    compareCity(c1: City, c2: City): boolean {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
}
