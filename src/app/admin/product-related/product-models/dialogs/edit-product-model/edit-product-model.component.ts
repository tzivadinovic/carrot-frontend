import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {
    City,
    ProductBrand,
    ProductBrandControllerService,
    ProductModel,
    ProductModelControllerService
} from "../../../../../../openapi";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SnackbarService} from "../../../../../../util/snackbar-handler";

@Component({
    selector: 'app-edit-product-model',
    templateUrl: './edit-product-model.component.html',
    styleUrls: ['./edit-product-model.component.css']
})
export class EditProductModelComponent implements OnInit {
    form = new FormGroup({
        id: new FormControl(null),
        name: new FormControl(null),
        productBrand: new FormControl(null)
    });

    productBrands: ProductBrand[] = [];
    productModels: ProductModel[] = [];
    productModel: ProductModel;

    constructor(private productModelService: ProductModelControllerService,
                private productBrandService: ProductBrandControllerService,
                private dialogRef: MatDialogRef<EditProductModelComponent>,
                @Inject(MAT_DIALOG_DATA) public data: ProductModel,
                private snackBarService: SnackbarService) {
        this.productModel = data;
    }

    ngOnInit(): void {
        this.form.get('name')?.setValue(this.productModel?.name);
        this.form.get('productBrand')?.setValue(this.productModel?.productBrand);
        this.getAllProductBrands();
    }

    getAllProductBrands(): void {
        this.productBrandService.getAllProductBrands().subscribe(productBrands => {
            this.productBrands = productBrands;
        });
    }

    getAllProductModels(): void {
        this.productModelService.getAllProductModels().subscribe(productModels => {
            this.productModels = productModels;
        });
    }

    editProductModel() {
        const productModel: ProductModel = this.form.value;
        productModel.id = this.data.id;
        if (this.form.valid) {
            this.productModelService.updateProductModel(productModel).subscribe(() => {
                this.getAllProductModels();
                this.snackBarService.showSuccessSnackbar('Successfully edited model');
                this.closeDialog();
            });
        }
    }

    closeDialog() {
        this.dialogRef.close(true);
    }

    compareBrand(pB1: ProductBrand, pB2: ProductBrand): boolean {
        return pB1 && pB2 ? pB1.id === pB2.id : pB1 === pB2;
    }

}
