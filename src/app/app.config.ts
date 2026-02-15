import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// // Import library module
// import { NgxSpinnerModule } from "ngx-spinner";
import { lodaingInterceptor } from './core/interceptors/lodaing.interceptor';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch() , withInterceptors([lodaingInterceptor])),
    
    importProvidersFrom( ),
    providePrimeNG({
            theme: {
                preset: Aura
            }
        })
  
  ]
};
