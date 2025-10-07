import { Component, OnInit, inject,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ProductoService } from 'src/app/data/services/producto-service';
import { producto } from 'src/app/data/interfaces-model/producto.model';
import { ListaProductosComponent } from 'src/app/components/lista-productos/lista-productos.component';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.page.html',
  styleUrls: ['./carrito-compras.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ListaProductosComponent ]
})
export class CarritoComprasPage implements OnInit {

  ListarCompraProducto: producto[] = [];
  
  productoService = inject(ProductoService)

  guardarSerervicio(){
    //this.productoService.GruardarDato(this.dato)
  }

  constructor() {}

 

  ngOnInit() {
    this.ListarCompraProducto = this.productoService.ListarCompraProducto
    
    }

    Compra(productos: producto) {
    console.log('Se recibió el producto:', productos);

    this.productoService.CompararProduct(productos);
  }
}

