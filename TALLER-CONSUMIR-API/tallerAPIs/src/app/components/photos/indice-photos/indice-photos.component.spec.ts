import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicePhotosComponent } from './indice-photos.component';

describe('IndicePhotosComponent', () => {
  let component: IndicePhotosComponent;
  let fixture: ComponentFixture<IndicePhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicePhotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
