import {Component, OnInit, ViewChild} from '@angular/core';
import {
    AddressControllerService,
    City, CityControllerService,
    Country,
    CountryControllerService,
    Municipality, MunicipalityControllerService,
    User,
    UserControllerService
} from "../../../../../openapi";
import {FormControl, FormGroup} from "@angular/forms";
import {SnackbarService} from "../../../../../util/snackbar-handler";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'app-create-admin-addresses',
    templateUrl: './create-admin-addresses.component.html',
    styleUrls: ['./create-admin-addresses.component.css']
})
export class CreateAdminAddressesComponent implements OnInit {
    form = new FormGroup({
        user: new FormControl(null),
        street: new FormControl(null),
        number: new FormControl(null),
        country: new FormControl(null),
        city: new FormControl(null),
        municipality: new FormControl(null)
    });

    countries: Country[] = [];
    cities: City[] = [];
    users: User[] = [];
    municipalities: Municipality[] = [];

    filteredCities: City[] = [];
    filteredMunicipalities: Municipality[] = [];

    cityId: number | undefined;
    countryId: number;

    selectedCountry: any;
    selectedCity: any;
    selectedMunicipality: any;

    constructor(private userService: UserControllerService,
                private countryService: CountryControllerService,
                private municipalityService: MunicipalityControllerService,
                private cityService: CityControllerService,
                private addressService: AddressControllerService,
                private snackBarService: SnackbarService,
                private dialogRef: MatDialogRef<CreateAdminAddressesComponent>) {
    }

    ngOnInit(): void {
        this.getAllUsers();
        this.getAllCountries();
        this.getAllCities();
        this.getAllMunicipalities();
    }

    getAllUsers(): void {
        this.userService.getAllUsers().subscribe(data => {
            this.users = data;
        });
    }

    getAllCountries(): void {
        this.countryService.getAllCountries().subscribe(data => {
            this.countries = data;
        });
    }

    getAllCities(): void {
        this.cityService.getAllCities().subscribe(data => {
            this.cities = data;
        });
    }

    getAllMunicipalities(): void {
        this.municipalityService.getAllMunicipalities().subscribe(data => {
            this.municipalities = data;
        });
    }

    createAddress() {
        if (this.form.valid) {
            this.addressService.saveAddress(this.form.value).subscribe(() => {
                this.snackBarService.showSuccessSnackbar('Successfully created address');
                this.closeDialog();
            });
        }
    }

    onCountrySelectionChange() {
        this.filteredCities = this.cities?.filter(city => city.country?.id === this.selectedCountry.id);
    }

    onCitySelectionChange() {
        this.filteredMunicipalities = this.municipalities?.filter(municipality => municipality.city?.id === this.selectedCity.id);
    }

    closeDialog() {
        this.dialogRef.close(true);
    }
}
