import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentTableComponent } from './student/student-table/student-table.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { ErrorPageComponent } from './error/error-page/error-page.component';

const routes: Routes = [
  { path: 'home', component: StudentTableComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'student', component: StudentDetailComponent },
  { path: 'student/detail/:id', component: StudentDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: ErrorPageComponent },

 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
