import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-curso',
  templateUrl: './card-curso.component.html',
  styleUrls: ['./card-curso.component.scss']
})
export class CardCursoComponent implements OnInit {
  @Input() tituloCurso!: string
  @Input() descricaoCurso!: string

  constructor() { }

  ngOnInit(): void {
  }

}
