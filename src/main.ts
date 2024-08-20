import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { EBillContainerComponent } from './app/e-bill-container/e-bill-container.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
