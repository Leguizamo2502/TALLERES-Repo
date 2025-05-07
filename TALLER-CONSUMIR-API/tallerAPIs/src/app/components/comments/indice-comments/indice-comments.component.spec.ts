import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceCommentsComponent } from './indice-comments.component';

describe('IndiceCommentsComponent', () => {
  let component: IndiceCommentsComponent;
  let fixture: ComponentFixture<IndiceCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndiceCommentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
