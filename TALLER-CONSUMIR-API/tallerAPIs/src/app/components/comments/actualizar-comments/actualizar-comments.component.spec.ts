import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCommentsComponent } from './actualizar-comments.component';

describe('ActualizarCommentsComponent', () => {
  let component: ActualizarCommentsComponent;
  let fixture: ComponentFixture<ActualizarCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarCommentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
