import {NgModule} from "@angular/core";
import {DurationComponent} from "./DurationComponent";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {GoogleService} from "../../services/CommunicationService/GoogleService";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DurationComponent
  ],
  providers: [
    GoogleService
  ],
  exports: [
    DurationComponent
  ]
})
export class DurationModule {

}
