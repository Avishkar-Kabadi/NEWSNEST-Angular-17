import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';
import { BwService } from './Services/bw.service';
import { InComponent } from './in/in.component';
import { BusinessComponent } from './business/business.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadlinesComponent,
    InComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
    providers: [BwService],
  bootstrap: [AppComponent]
})
export class AppModule { }
