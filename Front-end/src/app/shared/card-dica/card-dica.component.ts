import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faBookmark, faHeart } from '@fortawesome/free-solid-svg-icons';
import { CurtirdicaServiceService } from 'src/app/services/curtirdica-service.service';
import { SalvardicaServiceService } from 'src/app/services/salvardica-service.service';

@Component({
  selector: 'app-card-dica',
  templateUrl: './card-dica.component.html',
  styleUrls: ['./card-dica.component.scss'],
})
export class CardDicaComponent implements OnInit {
  @Input() tituloDica!: string;
  @Input() dica!: string;
  @Input() idDica !:string;
  @Input() idusuario !: string;

  faBookmark = faBookmark;
  faHeart = faHeart;

  constructor(private curtirService:CurtirdicaServiceService, private salvarService:SalvardicaServiceService) {}

  ngOnInit(): void {}

  curtir(){
    var curtido = {
      tituloDica:this.tituloDica,
      corpoDica:this.dica,
      id:this.idDica,
      usuario:this.idusuario
    }
    this.curtirService.curtir(curtido)
  }

  salvar(){
    var salvo ={
      tituloDica:this.tituloDica,
      corpoDica:this.dica,
      id:this.idDica,
      usuario:this.idusuario
    }

    this.salvarService.salvar(salvo)
  }
}
