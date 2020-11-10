import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Curso } from '../curso/curso';
import { CursoService } from '../curso/curso.service';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.css']
})
export class AddCursoComponent implements OnInit {  
  cursoModel : Curso = new Curso();
  
  constructor( private cursoService : CursoService, private router : Router , private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {}

  public create():void{       
    
    this.cursoService.addCurso(this.cursoModel).subscribe(
      response=>{this.router.navigate(['/listar'])
      swal.fire('Nuevo Curso', `Curso ${this.cursoModel.nombre} creado con exito`,"success")      
    console.log(response);  
    })
   
}
}
