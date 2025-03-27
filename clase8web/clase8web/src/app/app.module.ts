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
import { ErrorPageComponent } from './errors/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentTableComponent,
    StudentDetailComponent,
    StudentFormComponent,
    EmoticonPipe,
    AdminPageComponent,
    ErrorPageComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
