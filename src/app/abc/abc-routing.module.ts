import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpComponent } from '../emp/emp.component';
import { DeptComponent } from '../dept/dept.component';
import { EmpDetailComponent } from '../emp-detail/emp-detail.component';

const routes: Routes = [
  { path:'emp', component:EmpComponent },
  { path: 'emp/detail', component: EmpDetailComponent },
  { path:'dept', component:DeptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AbcRoutingModule { }
export const nav = [EmpComponent,DeptComponent];