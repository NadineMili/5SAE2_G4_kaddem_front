import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartementsComponent} from "./departements/departements.component";

const routes: Routes = [
  { path: 'departements', component: DepartementsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
