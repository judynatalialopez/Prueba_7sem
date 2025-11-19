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
