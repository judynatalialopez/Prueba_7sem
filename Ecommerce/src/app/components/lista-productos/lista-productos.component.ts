import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss'],
  imports: [IonButton, CommonModule]
})
export class ListaProductosComponent  implements OnInit {

  activo: boolean = false;

  listaproductos: any[] = [
    {
    id: "1",
    title: "Cien Años de Soledad",
    price: "18.99",
    descripcion: "Una obra maestra del realismo mágico escrita por Gabriel García Márquez.",
    categoria: "Ficción",
    image: "assets/img/book-01.jpeg" 

  },
  {
    id: "2",
    title: "1984",
    price: "15.50",
    descripcion: "Una novela distópica sobre un futuro totalitario escrita por George Orwell.",
    categoria: "Ciencia Ficción",
    image: "assets/img/book-02.jpg" 
  },
  {
    id: "3",
    title: "El Principito",
    price: "10.99",
    descripcion: "Un cuento filosófico sobre la vida y el amor, escrito por Antoine de Saint-Exupéry.",
    categoria: "Infantil",
    image: "assets/img/book-03.jpg" 
  },
  {
    id: "4",
    title: "Orgullo y Prejuicio",
    price: "12.75",
    descripcion: "Una historia de amor y orgullo en la Inglaterra del siglo XIX, escrita por Jane Austen.",
    categoria: "Romance",
    image: "assets/img/book-04.jpg" 
  },
  {
  id: "5",
  title: "Antes de diciembre",
  price: "18.00",
  descripcion: "Una novela juvenil romántica que narra la historia de amor y desafíos antes de diciembre.",
  categoria: "Romance",
  image: "assets/img/book-05.jpg"
},
  {
    id: "6",
    title: "Los Juegos del Hambre",
    price: "14.99",
    descripcion: "Una historia de supervivencia en un mundo distópico, escrita por Suzanne Collins.",
    categoria: "Juvenil",
    image: "assets/img/book-06.jpg" 
  },
  {
    id: "7",
    title: "Don Quijote de la Mancha",
    price: "16.80",
    descripcion: "Una sátira sobre los libros de caballería escrita por Miguel de Cervantes.",
    categoria: "Clásico",
    image: "assets/img/book-07.jpg" 
  },
  {
  id: "8",
  title: "Nosotros en la luna",
  price: "17.99",
  descripcion: "Una novela romántica de Alice Kellen que relata la historia de Rhys y Ginger, dos desconocidos que se encuentran en París y mantienen una relación marcada por la distancia, las decisiones y los sentimientos.",
  categoria: "Romance",
  image: "assets/img/book-08.jpg"
},
  {
  id: "9",
  title: "Culpa mía",
  price: "14.99",
  descripcion: "Primera entrega de la trilogía Culpables de Mercedes Ron. Narra la intensa y conflictiva relación entre Noah y Nick, marcada por el amor, la pasión y los secretos familiares.",
  categoria: "Romance",
  image: "assets/img/book-09.jpg"
},
{
  id: "10",
  title: "El amor de mi otra vida",
  price: "15.50",
  descripcion: "Novela romántica de Brittainy C. Cherry que explora segundas oportunidades, emociones intensas y el poder transformador del amor verdadero.",
  categoria: "Romance",
  image: "assets/img/book-10.jpg"
}

];

  

  listaObjetos = [
    {
      nombre: "Camilo",
      edad: 15
    },
  {
    nombre: "Samuel",
    edad: 16
  },
  {
    nombre: "Liam",
    edad: 20
  }
]

  constructor() { }

  ngOnInit() {}

  cambiarValor(){
    this.activo=!this.activo;
  }

}
