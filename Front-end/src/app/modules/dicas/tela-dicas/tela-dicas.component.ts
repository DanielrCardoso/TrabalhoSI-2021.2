import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dica } from 'src/app/models/Dica';
import { DicasServiceService } from 'src/app/services/dicas-service.service';

@Component({
  selector: 'app-tela-dicas',
  templateUrl: './tela-dicas.component.html',
  styleUrls: ['./tela-dicas.component.scss'],
})
export class TelaDicasComponent implements OnInit {
  public dicas$ !: Observable<Dica[]>;

  constructor(private DicasService: DicasServiceService) { }

  ngOnInit(): void {
    this.dicas$ = this.DicasService.listarDicas();
  }
}
