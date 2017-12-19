import {IRow} from "./IRow";
export interface IGoogleResponse {
  destinationAddresses: Array<string>;
  originAddresses: Array<string>;
  rows: Array<IRow>
}
