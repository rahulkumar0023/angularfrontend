import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { KeycloakInitService } from './services/keycloak.service'; 

// Import your routes from app.routes.ts
import { routes } from './app.routes';

// Initialize Keycloak before the app loads
function initializeKeycloak(keycloakInitService: KeycloakInitService) {
  return () => keycloakInitService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,  // Add HttpClientModule here
    RouterModule.forRoot(routes),
    KeycloakAngularModule // Import Keycloak module
  ],
  providers: [ {
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakInitService],
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
