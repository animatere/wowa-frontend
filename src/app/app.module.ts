import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { ProductService } from './product-service.service';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
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
    MultiSelectModule
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
