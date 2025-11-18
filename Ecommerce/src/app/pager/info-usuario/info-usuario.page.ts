import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonItem, IonLabel, IonButton, IonInput } from '@ionic/angular/standalone';
//import { ProductoService } from 'src/app/data/services/producto-service';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.page.html',
  styleUrls: ['./info-usuario.page.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonInput, ]
})

export class InfoUsuarioPage implements OnInit {

  titulo: string ="informacion del usuario";
  srcImage: string = "assets/img/icon-user.jpg";
  
  nombre: string ="Judy Natalia";
  apellido: string ="Correa Lopez";
  email: string ="natisjcl02@fmail.com";
  telefono: string ="323 973 9884";
  direccion: string ="Carrera Ingenieria De Software";
  activo: boolean = false;
  dato: string;


  imprimir(){
    alert(this.dato)
  }
  constructor() { }

  ngOnInit() {
  }

}
