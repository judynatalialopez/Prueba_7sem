import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.page.html',
  styleUrls: ['./info-usuario.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InfoUsuarioPage implements OnInit {

  titulo: string ="informacion del usuario";
  srcImage: string = "https://alfabetajuega.com/hero/2023/06/inosuke-hashibira-demon-slayer.jpg";
  
  constructor() { }

  ngOnInit() {
  }

}
