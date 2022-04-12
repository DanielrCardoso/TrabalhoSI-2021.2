import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-forum',
  templateUrl: './tela-forum.component.html',
  styleUrls: ['./tela-forum.component.scss']
})
export class TelaForumComponent implements OnInit {
  duvidas
  constructor() {
    this.duvidas = [
      {
        titulo: "Como fazer um pix?"
      },
      {
        titulo: "Como usar o face"
      },
      {
        titulo: "como usar o whatsapp"
      },
      {
        titulo: "como mudar a senha do wi-fi"
      },
      {
        titulo: "titulo"
      },
      {
        titulo: "titulo"
      },
      {
        titulo: "titulo"
      },
      {
        titulo: "titulo"
      },
      {
        titulo: "titulo"
      },
      {
        titulo: "titulo"
      },
      {
        titulo: "titulo"
      },
      {
        titulo: "titulo"
      },
      {
        titulo: "titulo"
      },
      {
        titulo: "titulo"
      },
      {
        titulo: "titulo"
      },
      {
        titulo: "titulo"
      },
      {
        titulo: "titulo"
      },
      {
        titulo: "titulo"
      },
    ]
  }

  ngOnInit(): void {
  }

}
