import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, OnInit, Output, inject,} from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton,} from '@ionic/angular/standalone';
import { producto } from 'src/app/data/interfaces-model/producto.model';
import { ProductoService } from 'src/app/data/services/producto-service';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss'],
  imports: [IonButton, CommonModule],
})
export class ListaProductosComponent implements OnInit {
  productoService = inject(ProductoService);

  titulo: string = 'Agregar Producto';

  
  @Input() valorEntradaPadre: producto[];
  @Output() agregarproducto = new EventEmitter<producto>();
  @Input() encarrito: boolean = false;
  
agregadoCarrito(producto: producto) {
  alert("Se agregó el producto al carrito");
  this.productoService.CompararProduct(producto);
}
 
  eliminadoCarrito(index){
    alert("se elimino el producto");
    this.productoService.EliminarProductoDelCarrito(index);
  }

  constructor() {}

  ngOnInit() {}


  
}
