import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAlmbumsComponent } from './crear-almbums.component';

describe('CrearAlmbumsComponent', () => {
  let component: CrearAlmbumsComponent;
  let fixture: ComponentFixture<CrearAlmbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearAlmbumsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearAlmbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
