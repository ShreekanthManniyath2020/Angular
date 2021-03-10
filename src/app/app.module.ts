import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoursesModule } from './modules/courses/courses.module';
import { StaticpagesModule } from './modules/staticpages/staticpages.module';
import { AdminModule } from './modules/admin/admin.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './common/banner/banner.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';

import { EmplyeeserviceService } from './modules/authentication/employeeservice.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoursesModule,
    StaticpagesModule,
    AdminModule,
    AuthenticationModule,
    AppRoutingModule
  ],
  providers: [EmplyeeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
