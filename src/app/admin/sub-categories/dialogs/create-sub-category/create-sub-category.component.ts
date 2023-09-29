import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {
    Category, CategoryControllerService,
    SubCategory, SubCategoryControllerService
} from "../../../../../openapi";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SnackbarService} from "../../../../../util/snackbar-handler";

@Component({
    selector: 'app-create-sub-category',
    templateUrl: './create-sub-category.component.html',
    styleUrls: ['./create-sub-category.component.css']
})
export class CreateSubCategoryComponent implements OnInit {
    form = new FormGroup({
        id: new FormControl(null),
        name: new FormControl(null),
        category: new FormControl(null)
    });

    categories: Category[] = [];

    constructor(private subCategoryService: SubCategoryControllerService,
                private categoryService: CategoryControllerService,
                private dialogRef: MatDialogRef<CreateSubCategoryComponent>,
                @Inject(MAT_DIALOG_DATA) public data: SubCategory,
                private snackBarService: SnackbarService) {
    }

    ngOnInit(): void {
        this.getAllCategories();
    }

    getAllCategories(): void {
        this.categoryService.getAllCategories().subscribe(categories => {
            this.categories = categories;
        });
    }

    createSubCategory() {
        if (this.form.valid) {
            this.subCategoryService.saveSubCategory(this.form.value).subscribe(() => {
                this.snackBarService.showSuccessSnackbar('Successfully created sub category');
                this.closeDialog();
            });
        }
    }

    closeDialog() {
        this.dialogRef.close(true);
    }

}
