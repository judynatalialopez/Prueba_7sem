import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { producto } from 'src/app/data/interfaces-model/producto.model';
import { CrearProductoComponent } from 'src/app/components/crear-producto/crear-producto.component';
import { ListaProductosComponent } from 'src/app/components/lista-productos/lista-productos.component';
import { ProductoService } from 'src/app/data/services/producto-service';



@Component({
  selector: 'app-crear-listar-producto',
  templateUrl: './crear-listar-producto.page.html',
  styleUrls: ['./crear-listar-producto.page.scss'],
  standalone: true,
  imports: [ IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    CrearProductoComponent,
    ListaProductosComponent
  ],
})
export class CrearListarProductoPage implements OnInit {
  
  listarproducto: producto[] = [];

  productoService = inject(ProductoService)

  guardarSerervicio(){
    //this.productoService.GruardarDato(this.dato)
  }

  constructor() {}

  ngOnInit() {
    this.listarproducto = this.productoService.listarproducto
  }

  listproduct(productos: producto) {
    console.log('Se recibió el producto:', productos);

    this.productoService.guardarlista(productos);
  }
}
