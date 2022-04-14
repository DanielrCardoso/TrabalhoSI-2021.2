import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-forum',
  templateUrl: './tela-forum.component.html',
  styleUrls: ['./tela-forum.component.scss'],
})
export class TelaForumComponent implements OnInit {
  duvidas;
  constructor() {
    this.duvidas = [
      {
        titulo: 'Como fazer um pix?',
        autor: 'Mario Correia',
        id: 1,
      },
      {
        titulo: 'Como usar o face',
        autor: 'Mario Correia',
        id: 2,
      },
      {
        titulo: 'como usar o whatsapp',
        autor: 'Mario Correia',
        id: 3,
      },
      {
        titulo: 'como mudar a senha do wi-fi',
        autor: 'Mario Correia',
        id: 4,
      },
      {
        titulo: 'titulo',
        autor: 'Mario Correia',
        id: 5,
      },
      {
        titulo: 'titulo',
        autor: 'Mario Correia',
        id: 6,
      },
      {
        titulo: 'titulo',
        autor: 'Mario Correia',
        id: 7,
      },
      {
        titulo: 'titulo',
        autor: 'Mario Correia',
        id: 8,
      },
      {
        titulo: 'titulo',
        autor: 'Mario Correia',
        id: 9,
      },
      {
        titulo: 'titulo',
        autor: 'Mario Correia',
        id: 10,
      },
      {
        titulo: 'titulo',
        autor: 'Mario Correia',
        id: 11,
      },
      {
        titulo: 'titulo',
        autor: 'Mario Correia',
        id: 12,
      },
      {
        titulo: 'titulo',
        autor: 'Mario Correia',
        id: 13,
      },
      {
        titulo: 'titulo',
        autor: 'Mario Correia',
        id: 14,
      },
      {
        titulo: 'titulo',
        autor: 'Mario Correia',
        id: 15,
      },
      {
        titulo: 'titulo',
        autor: 'Mario Correia',
        id: 16,
      },
      {
        titulo: 'titulo',
        autor: 'Mario Correia',
        id: 17,
      },
      {
        titulo: 'titulo',
        autor: 'Mario Correia',
        id: 18,
      },
    ];
  }

  ngOnInit(): void {}
}
