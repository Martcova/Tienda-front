import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlatadosComponent } from './enlatados.component';

describe('EnlatadosComponent', () => {
  let component: EnlatadosComponent;
  let fixture: ComponentFixture<EnlatadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlatadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlatadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
