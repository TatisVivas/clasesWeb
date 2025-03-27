import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { StudentTableComponent } from './student/student-table/student-table.component';
import { ErrorPageComponent } from './errors/error-page/error-page.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';

const routes: Routes = [

  //correlacionar componentes con rutas
  {path: 'admin', component: AdminPageComponent},
  {path: 'home', component: StudentTableComponent},
  {path: 'student/detail/:id', component: StudentDetailComponent},
  {path: 'student-detail/:id', component: StudentDetailComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', component: ErrorPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
