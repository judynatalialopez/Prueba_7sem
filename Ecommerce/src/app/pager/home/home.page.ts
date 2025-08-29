import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})

export class HomePage implements OnInit {
  
  titulo: string ="Library";
  logoImage: string = "assets/img/logo.jpeg";


  usuario: string = '';
  direccion: string = '';
  pais: string = '';
  idioma: string = '';
  moneda: string = '';

  imprimir() {
    console.log('Datos ingresados:');
    console.log('Usuario:', this.usuario);
    console.log('Dirección de entrega:', this.direccion);
    console.log('País y ciudad del usuario:', this.pais);
    console.log('Idioma:', this.idioma);
    console.log('Moneda:', this.moneda);
  }

  constructor() { }

  ngOnInit() {
  }

}
