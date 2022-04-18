import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-duvida',
  templateUrl: './card-duvida.component.html',
  styleUrls: ['./card-duvida.component.scss'],
})
export class CardDuvidaComponent implements OnInit {
  @Input() titulo!: string;
  @Input() autor!: string;

  constructor() {}

  ngOnInit(): void {}
}
