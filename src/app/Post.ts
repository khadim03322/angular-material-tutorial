import { Categorie } from "./Categorie";

export interface Post {
    title: string;
    category: string;
    date_posted: Date;
    position: number;
    body: string;
   /* categorieId: number;
    categorie: Categorie;*/

  }