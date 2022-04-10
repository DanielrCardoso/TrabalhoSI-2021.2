import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaForumCriarPerguntaComponent } from './tela-forum-criar-pergunta.component';

describe('TelaForumCriarPerguntaComponent', () => {
  let component: TelaForumCriarPerguntaComponent;
  let fixture: ComponentFixture<TelaForumCriarPerguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaForumCriarPerguntaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaForumCriarPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
