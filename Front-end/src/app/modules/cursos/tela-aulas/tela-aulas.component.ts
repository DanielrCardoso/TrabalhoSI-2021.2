import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/Curso';
import { CursoServiceService } from 'src/app/services/curso-service.service';

@Component({
  selector: 'app-tela-aulas',
  templateUrl: './tela-aulas.component.html',
  styleUrls: ['./tela-aulas.component.scss']
})
export class TelaAulasComponent implements OnInit {
  public cursos$ !: Observable<Curso[]>
  constructor(private CursoService : CursoServiceService) { }

  ngOnInit(): void {
    this.cursos$ = this.CursoService.listarCursos();
  }

}
