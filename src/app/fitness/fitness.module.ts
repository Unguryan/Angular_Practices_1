import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {FitnessContainerComponent, 
        FitnessItemComponent } from './index';

@NgModule({
  declarations: [
    FitnessContainerComponent,
    FitnessItemComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class FitnessModule { }
