import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormApiJsonComponent } from './form-api-json.component';

describe('FormApiJsonComponent', () => {
  let component: FormApiJsonComponent;
  let fixture: ComponentFixture<FormApiJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormApiJsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormApiJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
