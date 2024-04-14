import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';
import { SearchFilterPipe } from '../search-filter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RestaurantComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    FormsModule
  ],
 
})
export class RestaurantModule { }
