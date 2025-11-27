import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Menu } from './app/componentes/menu/menu';

bootstrapApplication(Menu, appConfig)
  .catch((err) => console.error(err));
