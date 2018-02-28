import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserAnimationsModule } from '@angular/animations';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.route';
import { AppComponent } from './app.component';
import { CarSelectionComponent } from './car-selection/car-selection.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    CarSelectionComponent,
    CarDetailComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC0JzMpR2unPFFO99XAOrSG8elRwxjVIf4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
