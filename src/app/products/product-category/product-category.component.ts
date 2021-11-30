import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-product-category',
    templateUrl: './product-category.component.html',
    styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
    filterPanelOpenState: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    toggleFilterPanel() {
        this.filterPanelOpenState = !this.filterPanelOpenState;
    }

    applyFilters() {
        this.filterPanelOpenState = false;
    }
}
