import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import {MyDoughnutChartComponent} from './my-doughnut-chart/my-doughnut-chart.component';
import {MyRadarChartComponent} from './my-radar-chart/my-radar-chart.component';
import {MyPieChartComponent} from './my-pie-chart/my-pie-chart.component'


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'bar-chart', component: MyBarChartComponent},
  {path: 'doughnut-chart', component: MyDoughnutChartComponent},
  {path: 'radar-chart', component: MyRadarChartComponent},
  {path: 'pie-chart', component: MyPieChartComponent},
  {path: '**',  component:MyBarChartComponent}
];
export const routing = RouterModule.forRoot(routes);
