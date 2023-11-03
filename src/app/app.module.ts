import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearRecursoComponent } from './components/crear-recurso/crear-recurso.component';
import { ListarRecursoComponent } from './components/listar-recurso/listar-recurso.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { EliminarRecursoComponent } from './components/eliminar-recurso/eliminar-recurso.component';
import { EditRecursoComponent } from './components/edit-recurso/edit-recurso.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearRecursoComponent,
    ListarRecursoComponent,
    FilterPipe,
    EliminarRecursoComponent,
    EditRecursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
