import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceAlbumsComponent } from './indice-albums.component';

describe('IndiceAlbumsComponent', () => {
  let component: IndiceAlbumsComponent;
  let fixture: ComponentFixture<IndiceAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndiceAlbumsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
