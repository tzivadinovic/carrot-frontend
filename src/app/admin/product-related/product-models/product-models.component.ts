import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ProductModel, ProductModelControllerService} from "../../../../openapi";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SnackbarService} from "../../../../util/snackbar-handler";
import {filterProductModel} from "../../../../util/filter";
import {DeleteDialogComponent} from "../../../common/dialogs/delete-dialog/delete-dialog.component";
import {CreateProductModelComponent} from "./dialogs/create-product-model/create-product-model.component";
import {EditProductModelComponent} from "./dialogs/edit-product-model/edit-product-model.component";

@Component({
  selector: 'app-product-models',
  templateUrl: './product-models.component.html',
  styleUrls: ['./product-models.component.css']
})
export class ProductModelsComponent implements OnInit, AfterViewInit {
  productModels: ProductModel[] = [];
  displayedColumns: string[] = ['id', 'name', 'productBrand', 'options'];
  dataSource = new MatTableDataSource<ProductModel>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,
              private productModelService: ProductModelControllerService,
              private snackBarService: SnackbarService) {
  }

  ngOnInit(): void {
    this.getAllProductModels();
  }

  getAllProductModels(): void {
    this.productModelService.getAllProductModels().subscribe(productModels => {
      this.productModels = productModels;
      this.dataSource.data = this.productModels;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  searchModel(inputPar: string) {
    if (inputPar) {
      this.dataSource.data = this.productModels.filter(productBrand => filterProductModel(productBrand, inputPar));
    } else {
      this.dataSource.data = this.productModels;
    }
  }

  openCreateProductModelDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    this.dialog.open(CreateProductModelComponent, dialogConfig).afterClosed().subscribe(() => {
      this.getAllProductModels();
    });
  }

  openEditProductModelDialog(productBrand: ProductModel): void {
    const dialogConfig = this.dialog.open(EditProductModelComponent, {
      width: '500px',
      data: productBrand
    });
    dialogConfig.afterClosed().subscribe(() => {
      this.getAllProductModels();
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
          this.productModelService.deleteProductModelById(id).subscribe(() => {
            this.getAllProductModels();
            this.snackBarService.showSuccessSnackbar('Successfully deleted model');
          });
        } else if (result === 'no') {
          this.dialog.closeAll();
        }
      }
    });
  }
}
