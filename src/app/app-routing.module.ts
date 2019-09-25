import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', component: DepartmentComponent},
  {path: 'employee', component: EmployeeComponent, pathMatch:'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }

export const routingComponents = [DepartmentComponent,EmployeeComponent,PageNotFoundComponent]


