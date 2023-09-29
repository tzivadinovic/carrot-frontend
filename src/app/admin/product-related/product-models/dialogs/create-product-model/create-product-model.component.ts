import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {
    ProductBrand,
    ProductBrandControllerService,
    ProductModel,
    ProductModelControllerService
} from "../../../../../../openapi";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SnackbarService} from "../../../../../../util/snackbar-handler";

@Component({
    selector: 'app-create-product-model',
    templateUrl: './create-product-model.component.html',
    styleUrls: ['./create-product-model.component.css']
})
export class CreateProductModelComponent implements OnInit {
    form = new FormGroup({
        id: new FormControl(null),
        name: new FormControl(null),
        productBrand: new FormControl(null)
    });

    productBrands: ProductBrand[] = [];

    constructor(private productModelService: ProductModelControllerService,
                private productBrandService: ProductBrandControllerService,
                private dialogRef: MatDialogRef<CreateProductModelComponent>,
                @Inject(MAT_DIALOG_DATA) public data: ProductModel,
                private snackBarService: SnackbarService) {
    }

    ngOnInit(): void {
        this.getAllProductBrands();
    }

    getAllProductBrands(): void {
        this.productBrandService.getAllProductBrands().subscribe(productBrands => {
            this.productBrands = productBrands;
        });
    }

    createProductModel() {
        if (this.form.valid) {
            this.productModelService.saveProductModel(this.form.value).subscribe(() => {
                this.snackBarService.showSuccessSnackbar('Successfully created model');
                this.closeDialog();
            });
        }
    }

    closeDialog() {
        this.dialogRef.close(true);
    }
}
