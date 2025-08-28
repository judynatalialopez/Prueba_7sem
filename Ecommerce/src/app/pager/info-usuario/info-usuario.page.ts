import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonItem, IonLabel, IonButton, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.page.html',
  styleUrls: ['./info-usuario.page.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonInput, ]
})

export class InfoUsuarioPage implements OnInit {

  titulo: string ="informacion del usuario";
  srcImage: string = "assets/img/icon-user.jpeg";
  
  nombre: string ="Judy";
  apellido: string ="Correa";
  email: string ="nat@email.com";
  telefono: string ="320 000 0000";
  direccion: string ="Carrera tata";
  activo: boolean = false;
  dato: string;

  prueba(){
    alert("se agrego")
    this.srcImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPNf8dMz_hRVLLxUw9U-mcyxO9BOyR4vftrA&s"
  }
  inactive(){
    this.activo = true; 
  }

  imprimir(){
    alert(this.dato)
  }
  constructor() { }

  ngOnInit() {
  }

}
