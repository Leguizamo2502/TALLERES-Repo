// export interface ApiJsonModel {
//   userId: number;
//   id?: number; // opcional en POST porque lo asigna el servidor
//   title: string;
//   body: string;
// }

export interface ApiJsonModel {
    id?: number;       // Opcional al crear, requerido al listar
    title: string;
    body: string;
  }