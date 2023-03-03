import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitnesBackgroundService, FitnesContainerComponent, FitnesItemComponent } from './index';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    FitnesContainerComponent,
    FitnesItemComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class FitnesModule { }
