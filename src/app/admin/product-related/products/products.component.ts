import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Product, ProductControllerService, SubCategory, SubCategoryControllerService} from "../../../../openapi";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SnackbarService} from "../../../../util/snackbar-handler";
import {filterSubCategory} from "../../../../util/filter";
import {
  CreateSubCategoryComponent
} from "../../sub-categories/dialogs/create-sub-category/create-sub-category.component";
import {EditSubCategoryComponent} from "../../sub-categories/dialogs/edit-sub-category/edit-sub-category.component";
import {DeleteDialogComponent} from "../../../common/dialogs/delete-dialog/delete-dialog.component";
import {CreateProductComponent} from "./dialogs/create-product/create-product.component";
import {EditProductComponent} from "./dialogs/edit-product/edit-product.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, AfterViewInit {
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'category', 'subCategory', 'name', 'productBrand', 'productModel', 'price', 'discountPrice', 'ean', 'stock', 'options'];
  dataSource = new MatTableDataSource<Product>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,
              private productService: ProductControllerService,
              private snackBarService: SnackbarService) {
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
      this.dataSource.data = this.products;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  searchProduct(inputPar: string) {
    if (inputPar) {
      this.dataSource.data = this.products.filter(subCategory => filterSubCategory(subCategory, inputPar));
    } else {
      this.dataSource.data = this.products;
    }
  }

  openCreateProductDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    this.dialog.open(CreateProductComponent, dialogConfig).afterClosed().subscribe(() => {
      this.getAllProducts();
    });
  }

  openEditProductDialog(product: Product): void {
    const dialogConfig = this.dialog.open(EditProductComponent, {
      width: '500px',
      data: product
    });
    dialogConfig.afterClosed().subscribe(() => {
      this.getAllProducts();
    });
  }

  openDeleteProductDialog(id: number): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '400px',
      backdropClass: 'background'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (result === 'yes') {
          this.productService.deleteProductById(id).subscribe(() => {
            this.getAllProducts();
            this.snackBarService.showSuccessSnackbar('Successfully deleted products');
          });
        } else if (result === 'no') {
          this.dialog.closeAll();
        }
      }
    });
  }

}
