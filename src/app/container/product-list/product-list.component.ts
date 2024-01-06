import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [NgFor, NgIf, NgStyle, ProductComponent, FilterComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  selectedProduct;
  products = [
    {
      id :1,
      name: "Nike React Infinity",
      description: "asdad asd asda sdas dsad asdad asdsadasd asdas d asdasd asdad as",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 160.0,
      discountPrice: 140.0,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://millenniumshoes.com/cdn/shop/products/AURORA_DZ2795-700_PHSLH001-2000_e1e56e60-4d40-4b10-9e99-3290f24818a6_1200x.jpg?v=1692394068",
      slug :"nike-react"
    },
    {
      id :2,
      name: "Nike React Miler",
      description: "asdad asd asda sdas dsad asdad asdsadasd asdas d asdasd asdad as",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 130.0,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXMSndyrLxkFZ2KNb0faqVY0KW4NTevlPuYO-bEikFgmScommYm8PZCaCbqJXqA-jA-8E",
      slug :"nike-react"
    },
    {
      id :2,
      name: "Nike React Miler",
      description: "asdad asd asda sdas dsad asdad asdsadasd asdas d asdasd asdad as",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 130.0,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXMSndyrLxkFZ2KNb0faqVY0KW4NTevlPuYO-bEikFgmScommYm8PZCaCbqJXqA-jA-8E",
      slug :"nike-react"
    },
    {
      id :2,
      name: "Nike React Miler",
      description: "asdad asd asda sdas dsad asdad asdsadasd asdas d asdasd asdad as",
      brand: "NIKE",
      gender: "MEN",    
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 130.0,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXMSndyrLxkFZ2KNb0faqVY0KW4NTevlPuYO-bEikFgmScommYm8PZCaCbqJXqA-jA-8E",
      slug :"nike-react"
    },
  ]
  totalProductInStock =  this.products.filter(product => product.is_in_inventory === true).length;
  totalProductsOutOfStock = this.products.length - this.totalProductInStock;
  selectedFilterRadio : string = 'all';
  onFilterChanged(value: string){
    this.selectedFilterRadio=value;
  }

  @Input()
  searchText : string = undefined
}
