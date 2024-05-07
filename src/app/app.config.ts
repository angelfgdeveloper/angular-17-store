import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

// withComponentInputBinding id llega por medio de un input a la ruta
// habilitando el prefetching para en lazyloading haya internet lento, haga una carga chunks
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withPreloading(PreloadAllModules)),
    provideHttpClient()
  ]
};

// Cambiar a la version 17 nueva con:
// ng g @angular/core:control-flow
// ./