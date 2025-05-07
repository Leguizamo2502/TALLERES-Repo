import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCommentsComponent } from './crear-comments.component';

describe('CrearCommentsComponent', () => {
  let component: CrearCommentsComponent;
  let fixture: ComponentFixture<CrearCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearCommentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
