import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faBookmark, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-dica',
  templateUrl: './card-dica.component.html',
  styleUrls: ['./card-dica.component.scss'],
})
export class CardDicaComponent implements OnInit {
  @Input() tituloDica!: string;
  @Input() dica!: string;

  faBookmark = faBookmark;
  faHeart = faHeart;

  constructor() {}

  ngOnInit(): void {}
}
