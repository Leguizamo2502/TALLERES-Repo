import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPhotosComponent } from './crear-photos.component';

describe('CrearPhotosComponent', () => {
  let component: CrearPhotosComponent;
  let fixture: ComponentFixture<CrearPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearPhotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
