import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms'; 
import { IonContent, IonButton,  IonInput,  IonCard,  IonCardHeader,  IonCardTitle,  IonCardContent,} from '@ionic/angular/standalone';
import { producto } from 'src/app/data/interfaces-model/producto.model';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-crear-producto',
  templateUrl:  './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    IonContent,
    IonButton,
    IonInput,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    CommonModule
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
  productreactive: FormGroup;
  

  @Output() crearproductos = new EventEmitter<producto>();
  private productform = inject(FormBuilder);

  reactiveform(){
    this.productreactive = this.productform.group({
      id: ['', [Validators.required, Validators.pattern(/^\d{1,3}$/)]],
      title: ['', [Validators.required, Validators.maxLength(15)]],
      price: ['', [Validators.required, Validators.pattern(/^\d{1,7}$/)]],
      descripcion: ['', [Validators.required, Validators.maxLength(20)]],
      categoria: ['', [Validators.required, Validators.maxLength(10)]],
      image: ['', [Validators.required,   Validators.pattern(/(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))$/i)]],
    })
  }  

  
  crearProduct() {
     if (this.productreactive.valid) {
    const nuevoProducto: producto = this.productreactive.value;
    console.log('Enviando producto creado:', nuevoProducto);

    this.crearproductos.emit(nuevoProducto);

    this.productreactive.reset();
  } else {
    console.log('Formulario inválido');
    this.productreactive.markAllAsTouched();
  }
  }

  constructor() {}

  ngOnInit() {
    this.reactiveform();
  }
}

