import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDicasComponent } from './tela-dicas.component';

describe('TelaDicasComponent', () => {
  let component: TelaDicasComponent;
  let fixture: ComponentFixture<TelaDicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaDicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaDicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
