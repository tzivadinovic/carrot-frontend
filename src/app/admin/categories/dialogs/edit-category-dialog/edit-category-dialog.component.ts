import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Municipality, CategoryControllerService, User} from "../../../../../openapi";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SnackbarService} from "../../../../../util/snackbar-handler";

@Component({
    selector: 'app-edit-category-dialogs',
    templateUrl: './edit-category-dialog.component.html',
    styleUrls: ['./edit-category-dialog.component.css']
})
export class EditCategoryDialogComponent implements OnInit {
    form = new FormGroup({
        id: new FormControl(null),
        name: new FormControl(null)
    });

    category: Municipality;
    categories: Municipality[] = [];

    constructor(private categoryService: CategoryControllerService,
                private dialogRef: MatDialogRef<EditCategoryDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: Municipality,
                private snackBarService: SnackbarService) {
        this.category = data;
    }

    ngOnInit(): void {
        this.form.get('name')?.setValue(this.category.name);
    }

    editCategory() {
        const category: Municipality = this.form.value;
        category.id = this.data.id;
        if (this.form.valid) {
            this.categoryService.updateCategory(category).subscribe(() => {
                this.getAllCategories();
                this.closeDialog();
                this.snackBarService.showSuccessSnackbar('Successfully edited category');
            });
        } else {
            this.snackBarService.showErrorSnackbar('Invalid form');
        }
    }

    getAllCategories(): void {
        this.categoryService.getAllCategories().subscribe(data => {
            this.categories = data;
        });
    }

    closeDialog() {
        this.dialogRef.close(true);
    }

}
