import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PhotoFormComponent,
    PhotoListComponent,
    PhotoPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
