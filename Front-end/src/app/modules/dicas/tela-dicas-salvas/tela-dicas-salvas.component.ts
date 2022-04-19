import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dica } from 'src/app/models/Dica';
import { SalvardicaServiceService } from 'src/app/services/salvardica-service.service';

@Component({
  selector: 'app-tela-dicas-salvas',
  templateUrl: './tela-dicas-salvas.component.html',
  styleUrls: ['./tela-dicas-salvas.component.scss']
})
export class TelaDicasSalvasComponent implements OnInit {

  dicasSalvas$ !: Observable<Dica[]>
  constructor(private SalvarService : SalvardicaServiceService) { }

  ngOnInit(): void {
    this.dicasSalvas$=this.SalvarService.listarDicasSalvas()
  }

}
