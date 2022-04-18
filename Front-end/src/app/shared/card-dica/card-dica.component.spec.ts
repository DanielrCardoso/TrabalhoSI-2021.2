import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDicaComponent } from './card-dica.component';

describe('CardDicaComponent', () => {
  let component: CardDicaComponent;
  let fixture: ComponentFixture<CardDicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
