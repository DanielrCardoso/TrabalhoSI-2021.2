import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-dicas',
  templateUrl: './tela-dicas.component.html',
  styleUrls: ['./tela-dicas.component.scss']
})
export class TelaDicasComponent implements OnInit {
  dicas

  constructor() { 
    this.dicas=[
      {
        tituloDica:"dica 01",
        dica:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      },
      {
        tituloDica:"dica 02",
        dica:"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
      },
      {
        tituloDica:"dica 03",
        dica:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      },
    ]
  }

  ngOnInit(): void {
  }

}
