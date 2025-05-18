import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentTableComponent } from './student/student-table/student-table.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { FormsModule } from '@angular/forms';
import { EmoticonPipe } from './pipes/emoticon.pipe';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { ErrorPageComponent } from './error/error-page/error-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginTeachersComponent } from './auth/login-teachers/login-teachers.component';
import { SignupTeacherComponent } from './auth/signup-teacher/signup-teacher.component';
import { AuthInterceptor } from './helpers/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    StudentTableComponent,
    StudentDetailComponent,
    StudentFormComponent,
    EmoticonPipe,
    AdminPageComponent,
    ErrorPageComponent,
    LoginComponent,
    SignupComponent,
    LoginTeachersComponent,
    SignupTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
