import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {
  ProductModel,
  ProductBrandControllerService
} from "../../../../openapi";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SnackbarService} from "../../../../util/snackbar-handler";
import {filterProductBrand} from "../../../../util/filter";
import {DeleteDialogComponent} from "../../../common/dialogs/delete-dialog/delete-dialog.component";
import {CreateProductBrandComponent} from "./dialogs/create-product-brand/create-product-brand.component";
import {EditProductBrandComponent} from "./dialogs/edit-product-brand/edit-product-brand.component";

@Component({
  selector: 'app-product-brands',
  templateUrl: './product-brands.component.html',
  styleUrls: ['./product-brands.component.css']
})
export class ProductBrandsComponent implements OnInit, AfterViewInit {
  productBrands: ProductModel[] = [];
  displayedColumns: string[] = ['id', 'name', 'options'];
  dataSource = new MatTableDataSource<ProductModel>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,
              private productBrandService: ProductBrandControllerService,
              private snackBarService: SnackbarService) {
  }

  ngOnInit(): void {
    this.getAllProductBrands();
  }

  getAllProductBrands(): void {
    this.productBrandService.getAllProductBrands().subscribe(productBrands => {
      this.productBrands = productBrands;
      this.dataSource.data = this.productBrands;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  searchBrand(inputPar: string) {
    if (inputPar) {
      this.dataSource.data = this.productBrands.filter(productBrand => filterProductBrand(productBrand, inputPar));
    } else {
      this.dataSource.data = this.productBrands;
    }
  }

  openCreateProductBrandDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    this.dialog.open(CreateProductBrandComponent, dialogConfig).afterClosed().subscribe(() => {
      this.getAllProductBrands();
    });
  }

  openEditProductBrandDialog(productBrand: ProductModel): void {
    const dialogConfig = this.dialog.open(EditProductBrandComponent, {
      width: '500px',
      data: productBrand
    });
    dialogConfig.afterClosed().subscribe(() => {
      this.getAllProductBrands();
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
          this.productBrandService.deleteProductBrandById(id).subscribe(() => {
            this.getAllProductBrands();
            this.snackBarService.showSuccessSnackbar('Successfully deleted brand');
          });
        } else if (result === 'no') {
          this.dialog.closeAll();
        }
      }
    });
  }
}
