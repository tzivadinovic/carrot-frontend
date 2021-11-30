import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

    favorite: boolean = false;

    addRemoveFromFavorites(): void {
        this.favorite = !this.favorite;
    }

    constructor() {
    }

    ngOnInit(): void {
    }

}
