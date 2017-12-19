import {IGoogleResponseStatuses} from "../../enums/Google/IGoogleResponseStatuses";
export interface IElements {
  distance: { text: string, value: number };
  duration: { text: string, value: number };
  status: IGoogleResponseStatuses
}
