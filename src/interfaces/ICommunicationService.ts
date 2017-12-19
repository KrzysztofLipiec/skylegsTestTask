import {ILocation} from "./ILocation";
import {ICommunicationResponse} from "./ICommunicationResponse";

export interface ICommunicationService <TYPE> {
  process(
    origin: Array<ILocation>,
    destinations: Array<ILocation>,
    onSuccess: (response: ICommunicationResponse) => void,
    onFailure: (response: string) => void): void
}
