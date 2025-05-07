import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarApiJsonComponent } from './actualizar-api-json.component';

describe('ActualizarApiJsonComponent', () => {
  let component: ActualizarApiJsonComponent;
  let fixture: ComponentFixture<ActualizarApiJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarApiJsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarApiJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
