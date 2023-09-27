import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Municipality, CategoryControllerService} from "../../../openapi";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SnackbarService} from "../../../util/snackbar-handler";
import {filterCategory} from "../../../util/filter";
import {DeleteDialogComponent} from "../../common/dialogs/delete-dialog/delete-dialog.component";
import {CreateCategoryDialogComponent} from "./dialogs/create-category-dialog/create-category-dialog.component";
import {EditCategoryDialogComponent} from "./dialogs/edit-category-dialog/edit-category-dialog.component";

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, AfterViewInit {
    categories: Municipality[] = [];
    displayedColumns: string[] = ['id', 'name', 'options'];
    dataSource = new MatTableDataSource<Municipality>([]);
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(public dialog: MatDialog,
                private categoryService: CategoryControllerService,
                private snackBarService: SnackbarService) {
    }

    ngOnInit(): void {
        this.getAllCategories();
    }

    getAllCategories(): void {
        this.categoryService.getAllCategories().subscribe(categories => {
            this.categories = categories;
            this.dataSource.data = this.categories;
        });
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    searchCategory(inputPar: string) {
        if (inputPar) {
            this.dataSource.data = this.categories.filter(category => filterCategory(category, inputPar));
        } else {
            this.dataSource.data = this.categories;
        }
    }

    openCreateCategoryDialog(): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '500px';
        this.dialog.open(CreateCategoryDialogComponent, dialogConfig).afterClosed().subscribe(() => {
            this.getAllCategories();
        });
    }

    openEditCategoryDialog(category: Municipality): void {
        const dialogConfig = this.dialog.open(EditCategoryDialogComponent, {
            width: '500px',
            data: category
        });
        dialogConfig.afterClosed().subscribe(() => {
            this.getAllCategories();
        });
    }

    openDeleteCategoryDialog(id: number): void {
        const dialogRef = this.dialog.open(DeleteDialogComponent, {
            width: '400px',
            backdropClass: 'background'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                if (result === 'yes') {
                    this.categoryService.deleteCategoryById(id).subscribe(() => {
                        this.getAllCategories();
                        this.snackBarService.showSuccessSnackbar('Successfully deleted category');
                    });
                } else if (result === 'no') {
                    this.dialog.closeAll();
                }
            }
        });
    }
}
