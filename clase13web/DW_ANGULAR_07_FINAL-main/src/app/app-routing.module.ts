import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentTableComponent } from './student/student-table/student-table.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { ErrorPageComponent } from './error/error-page/error-page.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginTeachersComponent } from './auth/login-teachers/login-teachers.component';
import { SignupTeacherComponent } from './auth/signup-teacher/signup-teacher.component';

const routes: Routes = [
  { path: 'home', component: StudentTableComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'student', component: StudentDetailComponent },
  { path: 'student/detail/:id', component: StudentDetailComponent },
  { path: 'student/home', component: StudentDetailComponent },
  { path: 'auth/login/estudiante', component: LoginComponent },
  { path: 'auth/login/profesor', component: LoginTeachersComponent },
  { path: 'auth/signup/estudiante', component: SignupComponent },
  { path: 'auth/signup/profesor', component: SignupTeacherComponent },
  { path: '', pathMatch: 'full', redirectTo:'auth/login/estudiante' },
  { path: '**', component: ErrorPageComponent },

 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
