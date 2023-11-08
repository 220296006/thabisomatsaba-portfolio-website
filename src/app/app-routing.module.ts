import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ServicesComponent } from './components/services/services.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { PortfolioPharmacyappComponent } from './components/portfolio-pharmacyapp/portfolio-pharmacyapp.component';
import { PortfolioTheebestprojectComponent } from './components/portfolio-theebestproject/portfolio-theebestproject.component';

const routes: Routes = [
  {path: 'home', pathMatch: 'full', component: HomeComponent},
  {path: 'nav', pathMatch: 'full', component:NavComponent},
  {path: 'about-me', pathMatch: 'full', component: AboutMeComponent},
  {path: 'services', pathMatch: 'full', component: ServicesComponent},
  {path: 'resume', pathMatch: 'full', component: ResumeComponent},
  {path: 'contact', pathMatch: 'full', component: ContactComponent},
  {path: 'portfolio', pathMatch: 'full', component: PortfolioComponent},
  {path: 'portfolio-pharmacyapp', pathMatch: 'full', component: PortfolioPharmacyappComponent},
  {path: 'portfolio-thebestproject', pathMatch: 'full', component: PortfolioTheebestprojectComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
