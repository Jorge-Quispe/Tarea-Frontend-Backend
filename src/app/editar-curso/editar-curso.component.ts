import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../curso/curso';
import { CursoService } from '../curso/curso.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {
cursos :any;
  curso : Curso = new Curso();

  constructor( private service : CursoService , private router : Router ,private activatedRoute:ActivatedRoute)  { }

  ngOnInit(): void {
this.cargarCurso();

}
cargarCurso() : void{
  this.activatedRoute.params.subscribe(params =>{
    let id = params['id']
    if(id){
      this.service.getCurso(id).subscribe(
        (data)=>{
          this.cursos = data['CURSOR_C'];
          this.curso.id_curso= this.cursos[0].ID_CURSO;
          this.curso.nombre=this.cursos[0].NOMBRE;
          this.curso.estado = this.cursos[0].ESTADO;


        }
      )
    }
  }
  )
}
modificarCurso():void{
  this.service.updateCurso(this.curso).subscribe(

  response=>{
        swal.fire({
          title: 'Estas seguro?',
          text: "No podras revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, update it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/listar'])
            swal.fire(
              'Actualizado!',
              'El registro ha sido Modificado.',
              'success'
            )
          }
        })    
    })
  }
}




