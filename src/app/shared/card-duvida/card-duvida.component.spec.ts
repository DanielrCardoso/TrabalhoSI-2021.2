import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDuvidaComponent } from './card-duvida.component';

describe('CardDuvidaComponent', () => {
  let component: CardDuvidaComponent;
  let fixture: ComponentFixture<CardDuvidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDuvidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDuvidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
