import { Route } from "@angular/router";
import { EmptyComponent } from "./empty/empty.component";

export const appRoutes: Route[] = [
  {
    path: "**",
    component: EmptyComponent
  }
];
