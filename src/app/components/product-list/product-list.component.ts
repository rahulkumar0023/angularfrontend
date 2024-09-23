
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  userDetails: any;
  products: Product[] = [];

  constructor(private productService: ProductService, private keycloakService: KeycloakService) {}

  ngOnInit(): void {
    if (this.keycloakService.isLoggedIn()) {
      this.userDetails = this.keycloakService.getKeycloakInstance().tokenParsed;
      console.log('User details:', this.userDetails);
    }
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
  logout(): void {
    this.keycloakService.logout(window.location.origin);
  }

    deleteProduct(id: number | undefined): void {
      if (id === undefined) {
        console.error("Cannot delete product, id is undefined.");
        return;
      }
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(p => p.id !== id);
    });
  }
}
