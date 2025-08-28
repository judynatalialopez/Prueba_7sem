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

  listaproductos: [
  {
    id: "1",
    title: "Cien Años de Soledad",
    price: "18.99",
    descripcion: "Una obra maestra del realismo mágico escrita por Gabriel García Márquez.",
    categoria: "Ficción",
    image: "https://m.media-amazon.com/images/I/81rEWmLXliL._UF1000,1000_QL80_.jpg" 

  },
  {
    id: "2",
    title: "1984",
    prince: "15.50",
    descrpcion: "Una novela distópica sobre un futuro totalitario escrita por George Orwell.",
    Categoria: "Ciencia Ficción",
    image: "https://example.com/imagenes/1984.jpg"
  },
  {
    id: "3",
    title: "El Principito",
    prince: "10.99",
    descrpcion: "Un cuento filosófico sobre la vida y el amor, escrito por Antoine de Saint-Exupéry.",
    Categoria: "Infantil",
    image: "https://example.com/imagenes/el-principito.jpg"
  },
  {
    id: "4",
    title: "Orgullo y Prejuicio",
    prince: "12.75",
    descrpcion: "Una historia de amor y orgullo en la Inglaterra del siglo XIX, escrita por Jane Austen.",
    Categoria: "Romance",
    image: "https://example.com/imagenes/orgullo-prejuicio.jpg"
  },
  {
    id: "5",
    title: "Sapiens: De animales a dioses",
    prince: "20.00",
    descrpcion: "Una exploración de la historia de la humanidad por Yuval Noah Harari.",
    Categoria: "Historia",
    image: "https://example.com/imagenes/sapiens.jpg"
  },
  {
    id: "6",
    title: "Los Juegos del Hambre",
    prince: "14.99",
    descrpcion: "Una historia de supervivencia en un mundo distópico, escrita por Suzanne Collins.",
    Categoria: "Juvenil",
    image: "https://example.com/imagenes/juegos-hambre.jpg"
  },
  {
    id: "7",
    title: "Don Quijote de la Mancha",
    prince: "16.80",
    descrpcion: "Una sátira sobre los libros de caballería escrita por Miguel de Cervantes.",
    Categoria: "Clásico",
    image: "https://example.com/imagenes/don-quijote.jpg"
  },
  {
    id: "8",
    title: "La Sombra del Viento",
    prince: "17.99",
    descrpcion: "Un thriller literario ambientado en la Barcelona de la posguerra, por Carlos Ruiz Zafón.",
    Categoria: "Misterio",
    image: "https://example.com/imagenes/sombra-viento.jpg"
  },
  {
    id: "9",
    title: "La Odisea",
    prince: "13.45",
    descrpcion: "La épica aventura de Odiseo, escrita por Homero.",
    Categoria: "Mitología",
    image: "https://example.com/imagenes/odisea.jpg"
  },
  {
    id: "10",
    title: "Padre Rico, Padre Pobre",
    prince: "11.90",
    descrpcion: "Consejos financieros para lograr la libertad económica, por Robert Kiyosaki.",
    Categoria: "Finanzas",
    image: "https://example.com/imagenes/padre-rico.jpg"
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
