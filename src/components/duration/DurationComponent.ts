import {ChangeDetectorRef, Component} from "@angular/core";
import {ILocation} from "../../interfaces/ILocation";
import {LocationArrays} from "../../enums/LocationArrays";
import {GoogleService} from "../../services/CommunicationService/GoogleService";
import {ICommunicationResponse} from "../../interfaces/ICommunicationResponse";
import {IConnection} from "../../interfaces/IConnection";

@Component({
  selector: 'duration-component',
  templateUrl: './DurationComponent.html'
})
export class DurationComponent {
  private destinations: Array<ILocation> = [{name: 'Lodz'}];
  private origins: Array<ILocation> = [{name: 'Warsaw'}];
  private connections: Array<IConnection> = [];

  constructor(private googleService: GoogleService, private changeDetectorRef: ChangeDetectorRef) {
    this.addLocation(LocationArrays.origins);
    this.addLocation(LocationArrays.destinations);
  }

  private isLastEmpty(array: LocationArrays): boolean {
    return this[array].length && !this[array][this[array].length - 1].name
  }

  private addLocation(array: LocationArrays): void {
    if (!this.isLastEmpty(array)) {
      this[array].push({name: ''});
    }
  }

  private handleResponse(response: ICommunicationResponse): void {
    this.connections = response.connections;
    this.changeDetectorRef.detectChanges();
  }

  private handleError(response: string): void {
    console.error(response);
  }

  private search(): void {
    this.googleService.process(
      this.origins.slice(0, -1),
      this.destinations.slice(0, -1),
      this.handleResponse.bind(this),
      this.handleError.bind(this)
    );
  }
}
