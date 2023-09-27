import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Municipality, CategoryControllerService} from "../../../../../openapi";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SnackbarService} from "../../../../../util/snackbar-handler";

@Component({
    selector: 'app-create-category-dialog',
    templateUrl: './create-category-dialog.component.html',
    styleUrls: ['./create-category-dialog.component.css']
})
export class CreateCategoryDialogComponent implements OnInit {
    form = new FormGroup({
        id: new FormControl(null),
        name: new FormControl(null)
    });

    constructor(private categoryService: CategoryControllerService,
                private dialogRef: MatDialogRef<CreateCategoryDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: Municipality,
                private snackBarService: SnackbarService) {
    }

    ngOnInit(): void {
    }

    createCategory() {
        if (this.form.valid) {
            this.categoryService.saveCategory(this.form.value).subscribe(() => {
                this.snackBarService.showSuccessSnackbar('Successfully created category');
                this.closeDialog();
            });
        }
    }

    closeDialog() {
        this.dialogRef.close(true);
    }

}
