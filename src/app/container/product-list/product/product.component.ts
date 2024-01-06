import { NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../../Models/Product';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgStyle, NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  product: Product;
}
