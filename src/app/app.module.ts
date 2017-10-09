import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BaseTemplateComponent } from './app.component';
import { LeftSidebarComponent } from './left_sidebar/left_sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ContentWrapperComponent } from './content_wrapper/content_wrapper.component';
import { FooterComponent } from './footer/footer.component';
import { RightSidebarComponent } from './right_sidebar/right_sidebar.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent }
];
@NgModule({
  declarations: [
    BaseTemplateComponent,
    LeftSidebarComponent,
    HeaderComponent,
    ContentWrapperComponent,
    FooterComponent,
    RightSidebarComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [BaseTemplateComponent]
})
export class BaseTemplateModule { }
