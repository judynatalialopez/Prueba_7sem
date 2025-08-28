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
    image: "assets/img/book-01.jpeg" 
  },
  {
    id: "3",
    title: "El Principito",
    price: "10.99",
    descripcion: "Un cuento filosófico sobre la vida y el amor, escrito por Antoine de Saint-Exupéry.",
    categoria: "Infantil",
    image: "assets/img/book-01.jpeg" 
  },
  {
    id: "4",
    title: "Orgullo y Prejuicio",
    price: "12.75",
    descripcion: "Una historia de amor y orgullo en la Inglaterra del siglo XIX, escrita por Jane Austen.",
    categoria: "Romance",
    image: "assets/img/book-01.jpeg" 
  },
  {
    id: "5",
    title: "Sapiens: De animales a dioses",
    price: "20.00",
    descripcion: "Una exploración de la historia de la humanidad por Yuval Noah Harari.",
    categoria: "Historia",
    image: "assets/img/book-01.jpeg" 
  },
  {
    id: "6",
    title: "Los Juegos del Hambre",
    price: "14.99",
    descripcion: "Una historia de supervivencia en un mundo distópico, escrita por Suzanne Collins.",
    categoria: "Juvenil",
    image: "assets/img/book-01.jpeg" 
  },
  {
    id: "7",
    title: "Don Quijote de la Mancha",
    price: "16.80",
    descripcion: "Una sátira sobre los libros de caballería escrita por Miguel de Cervantes.",
    categoria: "Clásico",
    image: "assets/img/book-01.jpeg" 
  },
  {
    id: "8",
    title: "La Sombra del Viento",
    price: "17.99",
    descripcion: "Un thriller literario ambientado en la Barcelona de la posguerra, por Carlos Ruiz Zafón.",
    categoria: "Misterio",
    image: "assets/img/book-01.jpeg" 
  },
  {
    id: "9",
    title: "La Odisea",
    price: "13.45",
    descripcion: "La épica aventura de Odiseo, escrita por Homero.",
    categoria: "Mitología",
    image: "assets/img/book-01.jpeg" 
  },
  {
    id: "10",
    title: "Padre Rico, Padre Pobre",
    price: "11.90",
    descripcion: "Consejos financieros para lograr la libertad económica, por Robert Kiyosaki.",
    categoria: "Finanzas",
    image: "assets/img/book-01.jpeg" 
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
