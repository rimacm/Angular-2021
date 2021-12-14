import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importamos el componente de / nosotros
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';



//Acá declaramos las rutas
// con '' declaramos la pagina de inicio
const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'nosotros', component: NosotrosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
