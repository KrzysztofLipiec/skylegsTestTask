import {DurationComponent} from "../components/duration/DurationComponent";

export const AppConfig = {
  routes: [
    {
      path: '',
      redirectTo: 'duration',
      pathMatch: 'full'
    },
    {
      path: 'duration',
      component: DurationComponent
    }
  ]
};
