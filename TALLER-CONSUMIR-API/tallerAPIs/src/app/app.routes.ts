import { Routes } from '@angular/router';
import { IndiceApiJsonComponent } from './components/apiJson/indice-api-json/indice-api-json.component';
import { CrearApiJsonComponent } from './components/apiJson/crear-api-json/crear-api-json.component';
import { ActualizarApiJsonComponent } from './components/apiJson/actualizar-api-json/actualizar-api-json.component';
import { IndiceApiPokemonComponent } from './components/apiPokemon/indice-api-pokemon/indice-api-pokemon.component';
import { IndiceCommentsComponent } from './components/comments/indice-comments/indice-comments.component';
import { CrearCommentsComponent } from './components/comments/crear-comments/crear-comments.component';
import { ActualizarCommentsComponent } from './components/comments/actualizar-comments/actualizar-comments.component';
import { IndiceAlbumsComponent } from './components/albums/indice-albums/indice-albums.component';
import { CrearAlmbumsComponent } from './components/albums/crear-almbums/crear-almbums.component';
import { ActualizarAlbumsComponent } from './components/albums/actualizar-albums/actualizar-albums.component';
import { IndicePhotosComponent } from './components/photos/indice-photos/indice-photos.component';
import { CrearPhotosComponent } from './components/photos/crear-photos/crear-photos.component';
import { ActualizarPhotosComponent } from './components/photos/actualizar-photos/actualizar-photos.component';
import { PrincipalComponent } from './principal/principal.component';

export const routes: Routes = [
    {path: '', redirectTo: 'principal', pathMatch: 'full'},
    {path: 'principal',component:PrincipalComponent},

    {path:'apiJson',component: IndiceApiJsonComponent},
    {path:'apiJson/create',component: CrearApiJsonComponent},
    {path:'apiJson/update/:id',component: ActualizarApiJsonComponent},

    {path:'comments',component: IndiceCommentsComponent},
    {path:'comments/create',component: CrearCommentsComponent},
    {path:'comments/update/:id',component: ActualizarCommentsComponent},

    {path: 'albums', component: IndiceAlbumsComponent},
    {path: 'albums/create', component: CrearAlmbumsComponent},
    {path: 'albums/update/:id', component: ActualizarAlbumsComponent},

    {path: 'photos', component:IndicePhotosComponent},
    {path: 'photos/create', component:CrearPhotosComponent},
    {path: 'photos/update/:id', component:ActualizarPhotosComponent},

    {path: 'apiPokemon', component:IndiceApiPokemonComponent},
];
