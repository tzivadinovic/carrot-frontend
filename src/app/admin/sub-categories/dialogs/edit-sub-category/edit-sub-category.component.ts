import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {
  Category,
  CategoryControllerService,
  ProductBrand,
  SubCategory,
  SubCategoryControllerService
} from "../../../../../openapi";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SnackbarService} from "../../../../../util/snackbar-handler";

@Component({
  selector: 'app-edit-sub-category',
  templateUrl: './edit-sub-category.component.html',
  styleUrls: ['./edit-sub-category.component.css']
})
export class EditSubCategoryComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null),
    category: new FormControl(null)
  });

  categories: Category[] = [];
  subCategory: SubCategory;

  constructor(private subCategoryService: SubCategoryControllerService,
              private categoryService: CategoryControllerService,
              private dialogRef: MatDialogRef<EditSubCategoryComponent>,
              @Inject(MAT_DIALOG_DATA) public data: SubCategory,
              private snackBarService: SnackbarService) {
    this.subCategory = data;
  }

  ngOnInit(): void {
    this.getAllCategories();
    this.form.get('name')?.setValue(this.subCategory?.name);
    this.form.get('category')?.setValue(this.subCategory?.category);
  }

  getAllCategories(): void {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  editSubCategory() {
    const subCategory: SubCategory = this.form.value;
    subCategory.id = this.data.id;
    if (this.form.valid) {
      this.subCategoryService.updateSubCategory(subCategory).subscribe(() => {
        this.snackBarService.showSuccessSnackbar('Successfully edited sub category');
        this.closeDialog();
      });
    }
  }

  closeDialog() {
    this.dialogRef.close(true);
  }

  compareCategory(c1: Category, c2: Category): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

}
