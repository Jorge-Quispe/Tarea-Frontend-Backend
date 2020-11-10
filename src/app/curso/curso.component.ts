import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  cursos :Curso[] ;
  constructor(private cursoService : CursoService , private router : Router){}
  ngOnInit(): void {
    
   this.listar();
       
  };
  listar():void{
    this.cursoService.getCursos().subscribe(
      (data) => {
  this.cursos= data['CURSOR_C'];

}
)
  }
  delCurso(num : number ) : void{
    this.cursoService.deleteCurso(num).subscribe(
      response=>{
        swal.fire({
          title: 'Estas seguro?',
          text: "No podras reverti esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText:'Me Equivoque',
          confirmButtonText: 'yes of course!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.listar()
            swal.fire('Eliminado!','El registro ha sido eliminado.','success')
          }
        })
      }
    )  
      
  }

  }


