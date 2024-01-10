import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { NgFor, NgIf } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Component({
  selector: 'container',
  standalone: true,
  imports: [SearchComponent, NgFor, ProductListComponent, ProductDetailComponent, NgIf],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  addToCart : number = 0;
  name = "John Doe";
  product = {
    name : "IphoneX",
    price: 15.20,
    discount: 8.5,
    inStock: 10,
    pImage: 'assets/shopping.jpg'
  };
  getDiscountedPrice(){
    return this.product.price - (this.product.price * this.product.discount / 100)
  };
  onNameChange(event : any){
    this.name = event.target.value;
  };
  decrement(){
    if(this.addToCart > 0) this.addToCart--;
  };
  increment(){
    if(this.addToCart <= this.product.inStock) this.addToCart++;
  }
  //you can use the tag or if there is just one component you can use the cluase inside ViewChild
  //@ViewChild('productListComponent') productListComponent: ProductListComponent;
  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;

  searchText : string = "";
  setSearchText(value : string){
    this.searchText = value;
  }
}
