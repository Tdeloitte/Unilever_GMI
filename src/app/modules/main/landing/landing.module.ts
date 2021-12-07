import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesComponent } from './favourites/favourites.component';
import { FeaturedContentComponent } from './featured-content/featured-content.component';
import { LandingTilesComponent } from './landing-tiles/landing-tiles.component';
import { LandingComponent } from './landing/landing.component';
import { LayoutModule } from '../layout/layout.module';
import { LandingRoutingModule } from './landing-routing.module';


@NgModule({
  declarations: [
    FavouritesComponent,
    FeaturedContentComponent,
    LandingTilesComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    LandingRoutingModule    
  ]
})
export class LandingModule { }
