import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-dica',
  templateUrl: './card-dica.component.html',
  styleUrls: ['./card-dica.component.scss']
})
export class CardDicaComponent implements OnInit {
  @Input() tituloDica!: string
  @Input() dica!: string
  constructor() { }

  ngOnInit(): void {
  }

}
