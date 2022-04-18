import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.scss']
})



export class BarraSuperiorComponent implements OnInit {
  sair !:boolean
  voltar = "/"
  visible!: boolean

  constructor(private route: Router) {
    route.events.pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
      .subscribe((events: RoutesRecognized[]) => {
        var url = events[1].urlAfterRedirects
        var previousUrl = events[0].urlAfterRedirects
        if (url.includes('login') || url.includes('cadastro') || url.includes("home")) {
          this.visible = false
        }
        else {
          this.visible = true
        }

        if(url.includes("/dicas") || url.includes("/forum") || url.includes("/aulas")){
          this.sair=true
          if(url.includes("criar-topico")){
            this.visible = true
            this.sair=false
            this.voltar = previousUrl
          }
        }
      });
  }

  ngOnInit(): void {
  }

}
