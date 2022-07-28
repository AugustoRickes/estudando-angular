import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloComponent } from './modulo/modulo.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';





@NgModule({
  declarations: [
    ModuloComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
  ],
  exports: [
    ModuloComponent,
    LandingPageComponent
  ]
})
export class ModuloTesteModule { }
