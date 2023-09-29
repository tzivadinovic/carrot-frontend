import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SubCategory, SubCategoryControllerService} from "../../../openapi";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SnackbarService} from "../../../util/snackbar-handler";
import {filterSubCategory} from "../../../util/filter";

import {DeleteDialogComponent} from "../../common/dialogs/delete-dialog/delete-dialog.component";
import {CreateSubCategoryComponent} from "./dialogs/create-sub-category/create-sub-category.component";
import {EditSubCategoryComponent} from "./dialogs/edit-sub-category/edit-sub-category.component";

@Component({
    selector: 'app-sub-categories',
    templateUrl: './sub-categories.component.html',
    styleUrls: ['./sub-categories.component.css']
})
export class SubCategoriesComponent implements OnInit, AfterViewInit {
    subCategories: SubCategory[] = [];
    displayedColumns: string[] = ['id', 'name', 'category', 'options'];
    dataSource = new MatTableDataSource<SubCategory>([]);
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(public dialog: MatDialog,
                private subCategoryService: SubCategoryControllerService,
                private snackBarService: SnackbarService) {
    }

    ngOnInit(): void {
        this.getAllSubCategories();
    }

    getAllSubCategories(): void {
        this.subCategoryService.getAllSubCategories().subscribe(subCategories => {
            this.subCategories = subCategories;
            this.dataSource.data = this.subCategories;
        });
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    searchSubCategory(inputPar: string) {
        if (inputPar) {
            this.dataSource.data = this.subCategories.filter(subCategory => filterSubCategory(subCategory, inputPar));
        } else {
            this.dataSource.data = this.subCategories;
        }
    }

    openCreateSubCategoryDialog(): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '500px';
        this.dialog.open(CreateSubCategoryComponent, dialogConfig).afterClosed().subscribe(() => {
            this.getAllSubCategories();
        });
    }

    openEditSubCategoryDialog(subCategory: SubCategory): void {
        const dialogConfig = this.dialog.open(EditSubCategoryComponent, {
            width: '500px',
            data: subCategory
        });
        dialogConfig.afterClosed().subscribe(() => {
            this.getAllSubCategories();
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
                    this.subCategoryService.deleteSubCategoryById(id).subscribe(() => {
                        this.getAllSubCategories();
                        this.snackBarService.showSuccessSnackbar('Successfully deleted sub category');
                    });
                } else if (result === 'no') {
                    this.dialog.closeAll();
                }
            }
        });
    }
}
