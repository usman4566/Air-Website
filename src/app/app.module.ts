import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavOneComponent } from './nav-one/nav-one.component';
import { NavTwoComponent } from './nav-two/nav-two.component';
import { FrontOneComponent } from './front-one/front-one.component';
import { NewsUpdatesComponent } from './news-updates/news-updates.component';
import { AirRankComponent } from './air-rank/air-rank.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { FooterComponent } from './footer/footer.component';
import { AuAcademicsComponent } from './au-academics/au-academics.component';

@NgModule({
  declarations: [
    AppComponent,
    NavOneComponent,
    NavTwoComponent,
    FrontOneComponent,
    NewsUpdatesComponent,
    AirRankComponent,
    SubjectsComponent,
    FooterComponent,
    AuAcademicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
