import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAlbumsComponent } from './actualizar-albums.component';

describe('ActualizarAlbumsComponent', () => {
  let component: ActualizarAlbumsComponent;
  let fixture: ComponentFixture<ActualizarAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarAlbumsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
