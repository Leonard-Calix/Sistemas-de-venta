import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './register/register.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { EntradasComponent } from './pages/entradas/entradas.component';


const routes: Routes = [

  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'usuario', component: UsuariosComponent },
      { path: 'cliente', component: ClientesComponent },
      { path: 'proveedores', component: ProveedoresComponent },
      { path: 'productos', component: ProductoComponent },
      { path: 'entradas', component: EntradasComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]

  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
