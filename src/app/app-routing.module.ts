import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routs } from './fitness/routes';

const routes: Routes = [
  ...routs,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
