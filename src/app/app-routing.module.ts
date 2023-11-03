import { ListarRecursoComponent } from './components/listar-recurso/listar-recurso.component';
import { CrearRecursoComponent } from './components/crear-recurso/crear-recurso.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EliminarRecursoComponent } from './components/eliminar-recurso/eliminar-recurso.component';
import { EditRecursoComponent } from './components/edit-recurso/edit-recurso.component';
import { AsignacionComponent } from './components/asignacion/asignacion.component';

const routes: Routes = [
  { path: '', component: CrearRecursoComponent },
  { path: 'listar-recurso', component: ListarRecursoComponent },
  { path: 'crear-recurso', component: CrearRecursoComponent},
  { path: 'editar-recurso/:id', component: CrearRecursoComponent},
  { path: 'eliminar-recurso/:id', component: EliminarRecursoComponent},
  { path: 'edit-recurso/:id', component: EditRecursoComponent},
  {path: 'asignacion', component: AsignacionComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
