import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BfcComponent } from './components/bfc/bfc.component';
import { BikeodysseyComponent } from './components/bikeodyssey/bikeodyssey.component';
import { BlancheComponent } from './components/blanche/blanche.component';
import { GoceryComponent } from './components/gocery/gocery.component';
import { HomeComponent } from './components/home/home.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'bfc-olongapo', component: BfcComponent },
  { path: 'gocery', component: GoceryComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'bike-odyssey', component: BikeodysseyComponent },
  { path: 'blanche', component: BlancheComponent },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
