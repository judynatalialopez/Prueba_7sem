import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import {  IonButton,  IonInput,  IonCard,  IonCardHeader,  IonCardTitle,  IonCardContent,} from '@ionic/angular/standalone';
import { producto } from 'src/app/data/interfaces-model/producto.model';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonButton,
    IonInput,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
  ],
})
export class CrearProductoComponent implements OnInit {
  titulo: string = 'Crear Producto';

  productos: producto = {
    id: 0,
    title: '',
    price: 0,
    descripcion: '',
    categoria: '',
    image: '',
  };

  @Output() crearproductos = new EventEmitter<producto>();

  crearProduct() {
    console.log('Enviando producto creado:', this.productos);

    const nuevoProducto = { ...this.productos };
    this.crearproductos.emit(nuevoProducto);

    this.productos = {
      id: 0,
      title: '',
      price: 0,
      descripcion: '',
      categoria: '',
      image: '',
    };
  }

  constructor() {}

  ngOnInit() {}
}
