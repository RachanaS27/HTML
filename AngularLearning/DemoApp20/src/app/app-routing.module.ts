import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TestComponent } from './add/test.component';
import { Test2Component } from './remove/test2.component';

const routes: Routes = [
  {path:"add",component:TestComponent},
  {path:"remove",component:Test2Component},
  {path:"list",component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
