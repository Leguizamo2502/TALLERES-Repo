import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceApiPokemonComponent } from './indice-api-pokemon.component';

describe('IndiceApiPokemonComponent', () => {
  let component: IndiceApiPokemonComponent;
  let fixture: ComponentFixture<IndiceApiPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndiceApiPokemonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceApiPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
