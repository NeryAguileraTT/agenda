/// <reference types="@angular/localize" />


import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";


import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { registerLicense } from '@syncfusion/ej2-base';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  registerLicense('Ngo9BigBOggjHTQxAR8/V1NAaF5cWWJCfEx+WmFZfVpgdV9EY1ZSRWY/P1ZhSXxXdkRjUH5dcndWRWJbVUU=');

  enableProdMode();
const platform = platformBrowserDynamic();
