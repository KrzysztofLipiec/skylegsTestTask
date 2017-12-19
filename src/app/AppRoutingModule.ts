import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AppConfig} from "./AppConfig";

@NgModule({
  imports: [RouterModule.forRoot(AppConfig.routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
