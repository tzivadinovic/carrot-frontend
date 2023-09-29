import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Category, ProductBrand, ProductBrandControllerService, ProductModel} from "../../../../../../openapi";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SnackbarService} from "../../../../../../util/snackbar-handler";

@Component({
    selector: 'app-edit-product-brand',
    templateUrl: './edit-product-brand.component.html',
    styleUrls: ['./edit-product-brand.component.css']
})
export class EditProductBrandComponent implements OnInit {
    form = new FormGroup({
        id: new FormControl(null),
        name: new FormControl(null)
    });

    productBrands: ProductBrand[] = [];
    productBrand: ProductBrand;

    constructor(private productBrandService: ProductBrandControllerService,
                private dialogRef: MatDialogRef<EditProductBrandComponent>,
                @Inject(MAT_DIALOG_DATA) public data: ProductBrand,
                private snackBarService: SnackbarService) {
        this.productBrand = data;
    }

    ngOnInit(): void {
        this.form.get('name')?.setValue(this.productBrand?.name);
    }

    editProductBrand() {
        const productBrand: ProductBrand = this.form.value;
        productBrand.id = this.data.id;
        if (this.form.valid) {
            this.productBrandService.updateProductBrand(productBrand).subscribe(() => {
                this.getAllProductBrands();
                this.snackBarService.showSuccessSnackbar('Successfully edited brand');
                this.closeDialog();
            });
        }
    }

    getAllProductBrands(): void {
        this.productBrandService.getAllProductBrands().subscribe(data => {
            this.productBrands = data;
        });
    }

    closeDialog() {
        this.dialogRef.close(true);
    }

}
