import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BaseTemplateComponent } from './app.component';
import { LeftSidebarComponent } from './left_sidebar/left_sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ContentWrapperComponent } from './content_wrapper/content_wrapper.component';
import { FooterComponent } from './footer/footer.component';
import { RightSidebarComponent } from './right_sidebar/right_sidebar.component';

@NgModule({
  declarations: [
    BaseTemplateComponent,
    LeftSidebarComponent,
    HeaderComponent,
    ContentWrapperComponent,
    FooterComponent,
    RightSidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BaseTemplateComponent]
})
export class BaseTemplateModule { }
