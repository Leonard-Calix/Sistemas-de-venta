import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './index/app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './register/register.component';
import { UsuariosService } from './services/usuarios.service';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { ProveedoresService } from './services/proveedores.service';
import { ClientesService } from './services/clientes.service';
import { ProductoService } from './services/producto.service';
import { EntradasComponent } from './pages/entradas/entradas.component';
import { EntradasService } from './services/entradas.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    BreadcrumbComponent,
    PagesComponent,
    RegisterComponent,
    UsuariosComponent,
    ClientesComponent,
    ProductoComponent,
    ProveedoresComponent,
    EntradasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [
    UsuariosService,
    ProveedoresService,
    ClientesService,
    ProductoService,
    EntradasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
