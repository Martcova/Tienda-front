import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetergentesComponent } from './detergentes.component';

describe('DetergentesComponent', () => {
  let component: DetergentesComponent;
  let fixture: ComponentFixture<DetergentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetergentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetergentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
