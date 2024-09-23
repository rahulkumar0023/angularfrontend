import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class KeycloakInitService {
  constructor(private keycloak: KeycloakService) {}

  async init(): Promise<void> {
    try {
      await this.keycloak.init({
        config: {
          url: 'http://localhost:8080', // Your Keycloak URL
          realm: 'my-realm', // Your Keycloak realm
          clientId: 'angular-client', // Your Keycloak client
        },
        initOptions: {
          onLoad: 'login-required', // Automatically redirect to the login page
          checkLoginIframe: false,
        },
        bearerPrefix: 'Bearer',
      });
      console.log('Keycloak initialization successful');
    } catch (error) {
      console.error('Keycloak initialization failed', error);
    }
  }
}
