import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaForumVisualizarPerguntaComponent } from './tela-forum-visualizar-pergunta.component';

describe('TelaForumVisualizarPerguntaComponent', () => {
  let component: TelaForumVisualizarPerguntaComponent;
  let fixture: ComponentFixture<TelaForumVisualizarPerguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaForumVisualizarPerguntaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaForumVisualizarPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
