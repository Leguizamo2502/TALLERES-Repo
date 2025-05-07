import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceApiJsonComponent } from './indice-api-json.component';

describe('IndiceApiJsonComponent', () => {
  let component: IndiceApiJsonComponent;
  let fixture: ComponentFixture<IndiceApiJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndiceApiJsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceApiJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
