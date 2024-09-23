import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule here
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
  standalone: true, // Keep this line
  imports: [FormsModule] // Import FormsModule directly into the component
})
export class ProductCreateComponent {
  product: Product = {
    name: '',
    price: 0,
  };

  constructor(private productService: ProductService) {}

  addProduct(): void {
    this.productService.createProduct(this.product).subscribe(() => {
      // Reset the form or give feedback
      this.product = { name: '', price: 0 };
      alert('Product added successfully!');
    });
  }
}

