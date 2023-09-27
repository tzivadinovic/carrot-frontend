import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CategoryControllerService, Municipality, MunicipalityControllerService} from "../../../openapi";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SnackbarService} from "../../../util/snackbar-handler";
import {filterCategory, filterMunicipality} from "../../../util/filter";
import {
    CreateCategoryDialogComponent
} from "../categories/dialogs/create-category-dialog/create-category-dialog.component";
import {EditCategoryDialogComponent} from "../categories/dialogs/edit-category-dialog/edit-category-dialog.component";
import {DeleteDialogComponent} from "../../common/dialogs/delete-dialog/delete-dialog.component";
import {EditMunicipalityDialogComponent} from "./dialogs/edit-municipality-dialog/edit-municipality-dialog.component";
import {
    CreateMunicipalityDialogComponent
} from "./dialogs/create-municipality-dialog/create-municipality-dialog.component";

@Component({
    selector: 'app-municipalities',
    templateUrl: './municipalities.component.html',
    styleUrls: ['./municipalities.component.css']
})
export class MunicipalitiesComponent implements OnInit, AfterViewInit {
    municipalities: Municipality[] = [];
    displayedColumns: string[] = ['id', 'name', 'country', 'options'];
    dataSource = new MatTableDataSource<Municipality>([]);
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(public dialog: MatDialog,
                private municipalityService: MunicipalityControllerService,
                private snackBarService: SnackbarService) {
    }

    ngOnInit(): void {
        this.getAllMunicipalities();
    }

    getAllMunicipalities(): void {
        this.municipalityService.getAllMunicipalities().subscribe(municipalities => {
            this.municipalities = municipalities;
            this.dataSource.data = this.municipalities;
        });
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    searchMunicipality(inputPar: string) {
        if (inputPar) {
            this.dataSource.data = this.municipalities.filter(municipality => filterMunicipality(municipality, inputPar));
        } else {
            this.dataSource.data = this.municipalities;
        }
    }

    openCreateMunicipalityDialog(): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '500px';
        this.dialog.open(CreateMunicipalityDialogComponent, dialogConfig).afterClosed().subscribe(() => {
            this.getAllMunicipalities();
        });
    }

    openEditMunicipalityDialog(municipality: Municipality): void {
        const dialogConfig = this.dialog.open(EditMunicipalityDialogComponent, {
            width: '500px',
            data: municipality
        });
        dialogConfig.afterClosed().subscribe(() => {
            this.getAllMunicipalities();
        });
    }

    openDeleteMunicipalityDialog(id: number): void {
        const dialogRef = this.dialog.open(DeleteDialogComponent, {
            width: '400px',
            backdropClass: 'background'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                if (result === 'yes') {
                    this.municipalityService.deleteMunicipalityById(id).subscribe(() => {
                        this.getAllMunicipalities();
                        this.snackBarService.showSuccessSnackbar('Successfully deleted municipality');
                    });
                } else if (result === 'no') {
                    this.dialog.closeAll();
                }
            }
        });
    }

}
