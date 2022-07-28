import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';



@NgModule({
  declarations: [
    TemplateDrivenComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TemplateDrivenComponent
  ]
})
export class FormsModule2 { }
