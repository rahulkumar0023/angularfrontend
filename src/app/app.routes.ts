import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AuthGuard } from './keycloak.guard'; // Import the guard
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';


export const routes: Routes = [
  { path: '', component: ProductListComponent, canActivate: [AuthGuard]},
  { path: 'create', 
    loadComponent: () => import('./components/product-create/product-create.component').then(m => m.ProductCreateComponent) ,
    canActivate: [AuthGuard]
  },
  { path: 'update/:id', component: ProductUpdateComponent, canActivate: [AuthGuard]}
];
