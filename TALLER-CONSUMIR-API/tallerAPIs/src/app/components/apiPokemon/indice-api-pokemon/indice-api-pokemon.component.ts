import { Component, inject, OnInit } from '@angular/core';
import { ApiPokemonService } from '../../../services/apiPokemon/api-pokemon.service';
import { PokemonModel } from '../../../models/apiPokemon/apiPokemon.model';
import { MatButton } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-indice-api-pokemon',
  imports: [MatTableModule,MatButton,RouterLink],
  templateUrl: './indice-api-pokemon.component.html',
  styleUrl: './indice-api-pokemon.component.css'
})
export class IndiceApiPokemonComponent implements OnInit{
 
  servicio = inject(ApiPokemonService);
  pokemones: PokemonModel[] = [];

  loadPokemones() {

     Swal.fire({
          title: 'Cargando...',
          text: 'Espere mientras se cargan los pokemones',
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });

    this.servicio.getAll().subscribe((data=>{
      this.pokemones = data;
      // console.log(this.pokemones);
      Swal.close();
    }))
  }
  displayedColumns: string[] = ['count','name'];

  ngOnInit(): void {
    this.loadPokemones();
  }








}
