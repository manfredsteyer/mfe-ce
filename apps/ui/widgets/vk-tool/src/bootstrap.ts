import { bootstrapApplication } from "@angular/platform-browser";
import { ApplicationRef } from "@angular/core";
import { Router } from "@angular/router";
import { connectRouter } from "@angular-architects/module-federation-tools";
import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";
import { createCustomElement } from "@angular/elements";

bootstrapApplication(AppComponent, appConfig)
  .then((appRef: ApplicationRef) => {
    const ce = createCustomElement(AppComponent, { injector: appRef.injector });
    customElements.define('vk-tool-widget', ce);
    connectRouter(appRef.injector.get(Router));
  })
  .catch((err) =>
    console.error(err)
  );
