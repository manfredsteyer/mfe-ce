import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { AppComponent } from "./app/app.component";
import { ApplicationRef } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { connectRouter } from "@angular-architects/module-federation-tools";
import { Router } from "@angular/router";

bootstrapApplication(AppComponent, appConfig)
  .then((appRef: ApplicationRef) => {
    const ce = createCustomElement(AppComponent, { injector: appRef.injector });
    customElements.define('av-quote-widget', ce);
    connectRouter(appRef.injector.get(Router));
  })
  .catch((err) =>
    console.error(err)
  );
