import { loadRemoteModule } from "@angular-architects/module-federation";
import { Route } from "@angular/router";
import {
  startsWith,
  WebComponentWrapper,
  WebComponentWrapperOptions
} from "@angular-architects/module-federation-tools";

export const appRoutes: Route[] = [
  {
    path: "av-quote",
    loadComponent: () => loadRemoteModule("mfeAvQuote", "./Component")
  },
  {
    path: "vk-tool",
    loadComponent: () => loadRemoteModule("mfeVkTool", "./Component")
  },
  {
    path: 'vk-tool-wc',
    component: WebComponentWrapper,
    data: {
      type: "module",
      remoteEntry: "http://localhost:4202/remoteEntry.js",
      exposedModule: "./web-components",
      elementName:  "vk-tool-widget"
    } as WebComponentWrapperOptions
  },
  {
    path: 'av-quote-wc',
    component: WebComponentWrapper,
    data: {
      type: "module",
      remoteEntry: "http://localhost:4201/remoteEntry.js",
      exposedModule: "./web-components",
      elementName:  "av-quote-widget"
    } as WebComponentWrapperOptions
  },
  {
    path: "angular2",
    component: WebComponentWrapper,
    data: {
      type: "script",
      remoteEntry: "https://gray-pond-030798810.azurestaticapps.net/remoteEntry.js",
      remoteName: "angular2",
      exposedModule: "./web-components",
      elementName: "angular2-element"
    } as WebComponentWrapperOptions
  },
];
