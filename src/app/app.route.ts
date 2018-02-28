import { RouterModule } from '@angular/router';
import { CarSelectionComponent } from "./car-selection/car-selection.component";
import { CarDetailComponent } from "./car-detail/car-detail.component";
import { MapComponent } from './map/map.component';

const routes = [
    { path: 'car-selection', component: CarSelectionComponent, data: { state: 'selection' } },
    { path: 'car-detail', component: CarDetailComponent, data: { state: 'detail' } },
    { path: 'map', component: MapComponent, data: { state: 'map' } },
  ];
  
  export const AppRouting = RouterModule.forRoot(routes);