import { bootstrapApplication, createApplication } from "@angular/platform-browser";
import { ApplicationRef } from "@angular/core";
import { Router } from "@angular/router";
import { connectRouter } from "@angular-architects/module-federation-tools";
import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";
import { createCustomElement } from "@angular/elements";

(async () => {
  const app = await createApplication(appConfig);
  connectRouter(app.injector.get(Router));
  const ce = createCustomElement(AppComponent, {
    injector: app.injector,
  });
  customElements.define('vk-tool-widget', ce);
})();

// bootstrapApplication(AppComponent, appConfig)
//   .then((appRef: ApplicationRef) => {
//     const ce = createCustomElement(AppComponent, { injector: appRef.injector });
//     customElements.define('vk-tool-widget', ce);
//     connectRouter(appRef.injector.get(Router));
//   })
//   .catch((err) =>
//     console.error(err)
//   );
