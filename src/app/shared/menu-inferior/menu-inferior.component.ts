import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs';

@Component({
  selector: 'app-menu-inferior',
  templateUrl: './menu-inferior.component.html',
  styleUrls: ['./menu-inferior.component.scss']
})
export class MenuInferiorComponent implements OnInit {
  visible !: boolean

  constructor(private route: Router) {
    route.events.pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
      .subscribe((events: RoutesRecognized[]) => {
        var url = events[1].urlAfterRedirects
        if (url.includes('login') || url.includes('cadastro')) {
          this.visible = false
        }
        else {
          this.visible = true
        }
      });
  }

  ngOnInit(): void {
  }

}
