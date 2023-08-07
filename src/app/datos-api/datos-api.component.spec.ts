import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosApiComponent } from './datos-api.component';

describe('DatosApiComponent', () => {
  let component: DatosApiComponent;
  let fixture: ComponentFixture<DatosApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
