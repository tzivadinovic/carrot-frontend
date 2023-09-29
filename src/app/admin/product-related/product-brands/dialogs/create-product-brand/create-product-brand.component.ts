import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductModel, ProductBrandControllerService, ProductBrand} from "../../../../../../openapi";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SnackbarService} from "../../../../../../util/snackbar-handler";

@Component({
    selector: 'app-create-product-brand',
    templateUrl: './create-product-brand.component.html',
    styleUrls: ['./create-product-brand.component.css']
})
export class CreateProductBrandComponent implements OnInit {
    form = new FormGroup({
        id: new FormControl(null),
        name: new FormControl(null)
    });

    constructor(private productBrandService: ProductBrandControllerService,
                private dialogRef: MatDialogRef<CreateProductBrandComponent>,
                @Inject(MAT_DIALOG_DATA) public data: ProductBrand,
                private snackBarService: SnackbarService) {
    }

    ngOnInit(): void {
    }

    createProductBrand() {
        if (this.form.valid) {
            this.productBrandService.saveProductBrand(this.form.value).subscribe(() => {
                this.snackBarService.showSuccessSnackbar('Successfully created brand');
                this.closeDialog();
            });
        }
    }

    closeDialog() {
        this.dialogRef.close(true);
    }

}
