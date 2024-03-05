import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';
import { InComponent } from './in/in.component';
import { BusinessComponent } from './business/business.component';

const routes: Routes = [
  {path:'',component:TopheadlinesComponent},
  {path:'in',component:InComponent},
  {path:'business',component:BusinessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
