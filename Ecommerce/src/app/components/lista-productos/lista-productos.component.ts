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
  activo: boolean = false;

  productos: producto = {
    id: 0,
    title: '',
    price: 0,
    descripcion: '',
    categoria: '',
    image: '',
  };

  @Output() agregarproducto = new EventEmitter<producto>();
  CompraProduct(producto: producto) {
  if (this.estaEnCarrito(producto)) {
    this.productoService.EliminarProductoDelCarrito(producto.id);
    console.log('Producto eliminado del carrito:', producto);
  } else {
    this.productoService.CompararProduct(producto);
    console.log('Producto agregado al carrito:', producto);
  }
}

estaEnCarrito(producto: producto): boolean {
  return this.productoService.ListarCompraProducto.some(
    (p) => p.id === producto.id
  );
  
}
@Input() modo: 'categoria' | 'carrito' = 'categoria';


  constructor() {}

  ngOnInit() {}

  @Input() valorEntradaPadre: producto[];

  cambiarValor() {
    this.activo = !this.activo;
  }
}
