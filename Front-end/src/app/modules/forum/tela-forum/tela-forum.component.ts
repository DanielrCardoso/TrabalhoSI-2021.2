import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Duvida } from 'src/app/models/Duvida';
import { ForumServiceService } from 'src/app/services/forum-service.service';

@Component({
  selector: 'app-tela-forum',
  templateUrl: './tela-forum.component.html',
  styleUrls: ['./tela-forum.component.scss'],
})
export class TelaForumComponent implements OnInit {
  public duvidas$ !: Observable<Duvida[]>;
  constructor(private ForumService : ForumServiceService) { }

  ngOnInit(): void {
    this.duvidas$ = this.ForumService.listarDuvidas();
  }
}
