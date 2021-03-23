import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FilterPipe } from './common/filter.pipe'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from './common/highlight.pipe';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FilterPipe,
    HighlightPipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
