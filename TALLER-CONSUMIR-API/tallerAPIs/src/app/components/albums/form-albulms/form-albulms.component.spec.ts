import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlbulmsComponent } from './form-albulms.component';

describe('FormAlbulmsComponent', () => {
  let component: FormAlbulmsComponent;
  let fixture: ComponentFixture<FormAlbulmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAlbulmsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAlbulmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
