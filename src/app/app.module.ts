import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BfcComponent } from './components/bfc/bfc.component';
import { GoceryComponent } from './components/gocery/gocery.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from './components/projects/projects.component';
import { BikeodysseyComponent } from './components/bikeodyssey/bikeodyssey.component';
import { BlancheComponent } from './components/blanche/blanche.component';
import { KireivalorantComponent } from './components/kireivalorant/kireivalorant.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BfcComponent,
    GoceryComponent,
    PlanetsComponent,
    ProjectsComponent,
    BikeodysseyComponent,
    BlancheComponent,
    KireivalorantComponent,
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
