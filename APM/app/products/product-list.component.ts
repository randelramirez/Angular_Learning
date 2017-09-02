import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html', //relative to index.html
    styleUrls: ['app/products/product-list.component.css'],

})
export class ProductListComponent implements OnInit {

    pageTitle: string = "Product List"

    imageWidth: number = 50;

    imageMargin = 2;

    showImage: boolean = false;

    listFilter: string = "";

    products: IProduct[];

    errorMessage: string = '';

    constructor(private _productService: ProductService) { 
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        // component initialization
        // good place to retrieve data for the template
        this._productService.getProducts().subscribe(products => 
            this.products = products, 
            error => this.errorMessage = <any>error);
        // console.log('products from http', this.products);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

}