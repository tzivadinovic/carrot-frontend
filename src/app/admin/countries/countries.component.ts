import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Municipality, CategoryControllerService, CountryControllerService} from "../../../openapi";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SnackbarService} from "../../../util/snackbar-handler";
import {filterCategory, filterCountry} from "../../../util/filter";
import {
  CreateCategoryDialogComponent
} from "../categories/dialogs/create-category-dialog/create-category-dialog.component";
import {EditCategoryDialogComponent} from "../categories/dialogs/edit-category-dialog/edit-category-dialog.component";
import {DeleteDialogComponent} from "../../common/dialogs/delete-dialog/delete-dialog.component";
import {EditCountryDialogComponent} from "./dialogs/edit-country-dialog/edit-country-dialog.component";
import {CreateCountryDialogComponent} from "./dialogs/create-country-dialog/create-country-dialog.component";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit, AfterViewInit {
  countries: Municipality[] = [];
  displayedColumns: string[] = ['id', 'name', 'options'];
  dataSource = new MatTableDataSource<Municipality>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,
              private countryService: CountryControllerService,
              private snackBarService: SnackbarService) {
  }

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries(): void {
    this.countryService.getAllCountries().subscribe(countries => {
      this.countries = countries;
      this.dataSource.data = this.countries;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  searchCountry(inputPar: string) {
    if (inputPar) {
      this.dataSource.data = this.countries.filter(country => filterCountry(country, inputPar));
    } else {
      this.dataSource.data = this.countries;
    }
  }

  openCreateCountryDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    this.dialog.open(CreateCountryDialogComponent, dialogConfig).afterClosed().subscribe(() => {
      this.getAllCountries();
    });
  }

  openEditCountryDialog(country: Municipality): void {
    const dialogConfig = this.dialog.open(EditCountryDialogComponent, {
      width: '500px',
      data: country
    });
    dialogConfig.afterClosed().subscribe(() => {
      this.getAllCountries();
    });
  }

  openDeleteCountryDialog(id: number): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '400px',
      backdropClass: 'background'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (result === 'yes') {
          this.countryService.deleteCountryById(id).subscribe(() => {
            this.getAllCountries();
            this.snackBarService.showSuccessSnackbar('Successfully deleted country');
          });
        } else if (result === 'no') {
          this.dialog.closeAll();
        }
      }
    });
  }
}
