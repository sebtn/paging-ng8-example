import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FilterPipe } from './common/filter.pipe'
import { AppComponent } from './app.component';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  declarations: [
    AppComponent,
    FilterPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
