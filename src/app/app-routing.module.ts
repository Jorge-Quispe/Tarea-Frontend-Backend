import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCursoComponent } from './add-curso/add-curso.component';
import { CursoComponent } from './curso/curso.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';


const routes: Routes = [
  {path : 'listar' , component : CursoComponent},
  {path : 'editcurso/:id' , component : EditarCursoComponent},
  {path : "curso/add" , component : AddCursoComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
