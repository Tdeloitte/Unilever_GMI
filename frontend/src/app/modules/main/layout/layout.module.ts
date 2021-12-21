import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from '../landing/landing/landing.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule
  ]
})
export class LayoutModule { }
