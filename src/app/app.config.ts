import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { authInterceptor } from './interceptores/auth-interceptor';
import { spinnerInterceptor } from './interceptores/spinner-interceptor';
import { loggingInterceptor } from './interceptores/logging-interceptor';
import { errorInterceptor } from './interceptores/error-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        authInterceptor,
        spinnerInterceptor,
        loggingInterceptor,
        errorInterceptor
      ])
    )
  ]
};
