import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tela-forum-criar-pergunta',
  templateUrl: './tela-forum-criar-pergunta.component.html',
  styleUrls: ['./tela-forum-criar-pergunta.component.scss'],
})
export class TelaForumCriarPerguntaComponent implements OnInit {
  constructor() {}

  formCadastroPergunta = new FormGroup({
    tituloPergunta: new FormControl(),
    corpoPergunta: new FormControl(),
  });

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.formCadastroPergunta.value);
  }
}
