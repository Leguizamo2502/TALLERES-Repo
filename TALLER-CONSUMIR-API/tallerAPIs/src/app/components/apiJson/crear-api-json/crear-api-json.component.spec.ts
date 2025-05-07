import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearApiJsonComponent } from './crear-api-json.component';

describe('CrearApiJsonComponent', () => {
  let component: CrearApiJsonComponent;
  let fixture: ComponentFixture<CrearApiJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearApiJsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearApiJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
