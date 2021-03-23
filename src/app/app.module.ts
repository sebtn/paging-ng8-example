import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FilterPipe } from './email-list/common/filter.pipe'
import { AppComponent } from './app.component';
import { EmailListComponent } from './email-list/email-list.component'
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from './email-list/common/highlight.pipe';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    EmailListComponent,
    FilterPipe,
    HighlightPipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
