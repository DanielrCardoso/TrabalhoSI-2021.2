import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDicasSalvasComponent } from './tela-dicas-salvas.component';

describe('TelaDicasSalvasComponent', () => {
  let component: TelaDicasSalvasComponent;
  let fixture: ComponentFixture<TelaDicasSalvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaDicasSalvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaDicasSalvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
