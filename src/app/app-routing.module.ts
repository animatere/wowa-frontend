import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { GameboardComponent } from './gameboard/gameboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'main', component: MainpageComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'gameboard', component: GameboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
