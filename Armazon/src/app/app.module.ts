import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { FavoritoComponent } from './pagina/pagina/favorito/favorito.component';
import { ProductoComponent } from './pagina/producto/producto.component';
import { MyCartComponent } from './pagina/my-cart/my-cart.component';
import { AdministradorComponent } from './pagina/administrador/administrador.component';
import { ListaComprasComponent } from './pagina/lista-compras/lista-compras.component';
import { ProductosEnVentaComponent } from './pagina/productos-en-venta/productos-en-venta.component';
import { CiudadComponent } from './pagina/ciudad/ciudad.component';
import { CreacionProductoComponent } from './pagina/creacion-producto/creacion-producto.component';
import { RestablecerPasswordComponent } from './pagina/restablecer-password/restablecer-password.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    FavoritoComponent,
    ProductoComponent,
    MyCartComponent,
    AdministradorComponent,
    ListaComprasComponent,
    ProductosEnVentaComponent,
    CiudadComponent,
    CreacionProductoComponent,
    RestablecerPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
