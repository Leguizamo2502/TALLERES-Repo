import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPhotosComponent } from './actualizar-photos.component';

describe('ActualizarPhotosComponent', () => {
  let component: ActualizarPhotosComponent;
  let fixture: ComponentFixture<ActualizarPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarPhotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
