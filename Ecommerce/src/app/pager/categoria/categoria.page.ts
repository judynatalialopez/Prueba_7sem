import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ListaProductosComponent } from 'src/app/components/lista-productos/lista-productos.component';
import { producto } from 'src/app/data/interfaces-model/producto.model';
import { ProductoService } from 'src/app/data/services/producto-service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ListaProductosComponent]
})
export class CategoriaPage implements OnInit {
  ListaProductos: producto[] = [
    {
      id: 1,
      title: "Cien Años de Soledad",
      price: 18.99,
      descripcion: "Una obra maestra del realismo mágico escrita por Gabriel García Márquez.",
      categoria: "Ficción",
      image: "assets/img/book-01.jpeg"
    },
    {
      id: 2,
      title: "1984",
      price: 15.50,
      descripcion: "Una novela distópica sobre un futuro totalitario escrita por George Orwell.",
      categoria: "Ciencia Ficción",
      image: "assets/img/book-02.jpg"
    },
    {
      id: 3,
      title: "El Principito",
      price: 10.99,
      descripcion: "Un cuento filosófico sobre la vida y el amor, escrito por Antoine de Saint-Exupéry.",
      categoria: "Infantil",
      image: "assets/img/book-03.jpg"
    }
  ];

  listarproducto: producto[] = [];
  productoService = inject(ProductoService);
  listaConProductosAPI: producto[] = []
  listaSinProductos: producto[] = [];


  constructor() {}

  ngOnInit() {
    this.productoAPI();
    this.listaSinProductos = this.productoService.obtenerproducto();
  }

  productoAPI() {
    this.productoService.getProductos().subscribe({
      next: (data) => {
        this.listarproducto = data;
      },
      error: (error) => {
        console.error('error:', error);
      }
    });
  }
 
}
