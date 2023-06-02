import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { MultiSelectModule } from 'primeng/multiselect';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainCardComponent } from './main-card/main-card.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardGeneratorComponent } from './card-generator/card-generator.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CardService } from 'src/services/card.service';
import { AngularToastModule } from "angular-toasts";
import { GameboardComponent } from './gameboard/gameboard.component';
import { ModalComponent } from './modal/modal.component';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    DashboardComponent,
    MainCardComponent,
    PlayerCardComponent,
    NavbarComponent,
    CardGeneratorComponent,
    AdminDashboardComponent,
    GameboardComponent,
    ModalComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    SelectButtonModule,
    SidebarModule,
    ToolbarModule,
    MultiSelectModule,
    AngularToastModule    
  ],
  providers: [CardService, MdbModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
