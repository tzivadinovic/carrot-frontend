import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CategoryControllerService, City, CityControllerService, Municipality} from "../../../openapi";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SnackbarService} from "../../../util/snackbar-handler";
import {filterCategory, filterCity} from "../../../util/filter";
import {
    CreateCategoryDialogComponent
} from "../categories/dialogs/create-category-dialog/create-category-dialog.component";
import {EditCategoryDialogComponent} from "../categories/dialogs/edit-category-dialog/edit-category-dialog.component";
import {DeleteDialogComponent} from "../../common/dialogs/delete-dialog/delete-dialog.component";
import {CreateCityDialogComponent} from "./dialogs/create-city-dialog/create-city-dialog.component";
import {EditCityDialogComponent} from "./dialogs/edit-city-dialog/edit-city-dialog.component";

@Component({
    selector: 'app-cities',
    templateUrl: './cities.component.html',
    styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit, AfterViewInit {
    cities: City[] = [];
    displayedColumns: string[] = ['id', 'name', 'zipCode', 'country', 'options'];
    dataSource = new MatTableDataSource<City>([]);
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(public dialog: MatDialog,
                private cityService: CityControllerService,
                private snackBarService: SnackbarService) {
    }

    ngOnInit(): void {
        this.getAllCities();
    }

    getAllCities(): void {
        this.cityService.getAllCities().subscribe(cities => {
            this.cities = cities;
            this.dataSource.data = this.cities;
        });
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    searchCity(inputPar: string) {
        if (inputPar) {
            this.dataSource.data = this.cities.filter(city => filterCity(city, inputPar));
        } else {
            this.dataSource.data = this.cities;
        }
    }

    openCreateCityDialog(): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '500px';
        this.dialog.open(CreateCityDialogComponent, dialogConfig).afterClosed().subscribe(() => {
            this.getAllCities();
        });
    }

    openEditCityDialog(category: Municipality): void {
        const dialogConfig = this.dialog.open(EditCityDialogComponent, {
            width: '500px',
            data: category
        });
        dialogConfig.afterClosed().subscribe(() => {
            this.getAllCities();
        });
    }

    openDeleteCityDialog(id: number): void {
        const dialogRef = this.dialog.open(DeleteDialogComponent, {
            width: '400px',
            backdropClass: 'background'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                if (result === 'yes') {
                    this.cityService.deleteCityById(id).subscribe(() => {
                        this.getAllCities();
                        this.snackBarService.showSuccessSnackbar('Successfully deleted city');
                    });
                } else if (result === 'no') {
                    this.dialog.closeAll();
                }
            }
        });
    }

}
