import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { producto } from 'src/app/data/interfaces-model/producto.model';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss'],
  imports: [IonButton, CommonModule]
})
export class ListaProductosComponent implements OnInit {

  activo: boolean = false;
 

  //listaObjetos = [
    //{
      //nombre: "Camilo",
      //edad: 15
    //},
    //{
      //nombre: "Samuel",
      //edad: 16
    //},
    //{
      //nombre: "Liam",
      //edad: 20
    //}
  //]

  constructor() { }

  ngOnInit() { }

  @Input()  valorEntradaPadre: producto[];

  cambiarValor() {
    //this. producto = {
    //id: 1,
    //precio: 12000
    //}

    this.activo = !this.activo;
  }

}

