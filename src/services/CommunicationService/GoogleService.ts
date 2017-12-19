import {ICommunicationService} from "../../interfaces/ICommunicationService";
import {ILocation} from "../../interfaces/ILocation";
import {Injectable} from "@angular/core";
import {IGoogleResponseStatuses} from "../../enums/Google/IGoogleResponseStatuses";
import {IGoogleResponse} from "../../interfaces/Google/IGoogleResponse";
import {ICommunicationResponse} from "../../interfaces/ICommunicationResponse";

declare const google;

@Injectable()
export class GoogleService implements ICommunicationService<IGoogleResponse> {
  private service: any;

  constructor() {
    this.service = new google.maps.DistanceMatrixService;
  }

  private prepareResponse(response: IGoogleResponse): ICommunicationResponse {
    let result = {connections: []};

    response.rows.forEach((row, rowIndex) => {
      row.elements.forEach((element, elementIndex) => {
        if (element.status === IGoogleResponseStatuses.OK) {
          result.connections.push({
            from: response.originAddresses[rowIndex],
            to: response.destinationAddresses[elementIndex],
            distance: element.distance,
            duration: element.duration
          });
        }
      });
    });

    return result;
  }

  public process(origins: Array<ILocation>,
                 destinations: Array<ILocation>,
                 onSuccess: (response: ICommunicationResponse) => void,
                 onFailutre: (response: string) => void) {
    this.service.getDistanceMatrix({
      origins: origins.map((origin) => origin.name),
      destinations: destinations.map((destination) => destination.name),
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.METRIC
    }, (response: IGoogleResponse, status: IGoogleResponseStatuses) => {
      if (status !== IGoogleResponseStatuses.OK) {
        onFailutre('Google request failed');
      } else {
        onSuccess(this.prepareResponse(response));
      }
    });
  }
}
