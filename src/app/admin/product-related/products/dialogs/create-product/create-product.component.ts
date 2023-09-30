import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {
    AddressControllerService, Category, CategoryControllerService,
    City,
    CityControllerService,
    Country,
    CountryControllerService,
    Municipality,
    MunicipalityControllerService, ProductBrand,
    ProductBrandControllerService, ProductControllerService,
    ProductModel,
    ProductModelControllerService,
    SubCategory, SubCategoryControllerService,
    User,
    UserControllerService
} from "../../../../../../openapi";
import {SnackbarService} from "../../../../../../util/snackbar-handler";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
    form = new FormGroup({
        category: new FormControl(''),
        subCategory: new FormControl(''),
        name: new FormControl(''),
        productBrand: new FormControl(''),
        productModel: new FormControl(''),
        stock: new FormControl(''),
        price: new FormControl(''),
        discountPrice: new FormControl(''),
        ean: new FormControl('')
    });

    subCategories: SubCategory[] = [];
    productModels: ProductModel[] = [];
    productBrands: ProductBrand[] = [];
    categories: Category[] = [];

    filteredSubCategories: SubCategory[] = [];
    filteredProductModels: ProductModel[] = [];

    selectedCategory: any;
    selectedProductBrand: any;

    constructor(private productBrandService: ProductBrandControllerService,
                private productModelService: ProductModelControllerService,
                private categoryService: CategoryControllerService,
                private subCategoryService: SubCategoryControllerService,
                private productService: ProductControllerService,
                private snackBarService: SnackbarService,
                private dialogRef: MatDialogRef<CreateProductComponent>) {
    }

    ngOnInit(): void {
        this.getAllProductBrands();
        this.getAllProductModels();
        this.getAllCategories();
        this.getAllSubCategories();
    }

    getAllProductBrands(): void {
        this.productBrandService.getAllProductBrands().subscribe(data => {
            this.productBrands = data;
        });
    }

    getAllProductModels(): void {
        this.productModelService.getAllProductModels().subscribe(data => {
            this.productModels = data;
        });
    }

    getAllCategories(): void {
        this.categoryService.getAllCategories().subscribe(data => {
            this.categories = data;
        });
    }

    getAllSubCategories(): void {
        this.subCategoryService.getAllSubCategories().subscribe(data => {
            this.subCategories = data;
        });
    }

    createProduct() {
        if (this.form.valid) {
            this.productService.saveProduct(this.form.value).subscribe(() => {
                this.snackBarService.showSuccessSnackbar('Successfully created product');
                this.closeDialog();
            });
        }
    }

    onCategorySelectionChange() {
        this.filteredSubCategories = this.subCategories?.filter(subCategory => subCategory.category?.id === this.selectedCategory.id);
    }

    onProductBrandSelectionChange() {
        this.filteredProductModels = this.productModels?.filter(productModel => productModel.productBrand?.id === this.selectedProductBrand.id);
    }

    closeDialog() {
        this.dialogRef.close(true);
    }

}
