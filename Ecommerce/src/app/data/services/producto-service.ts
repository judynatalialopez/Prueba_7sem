import { Injectable } from '@angular/core';
import { producto } from '../interfaces-model/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  /*datoguardado: string=""
  listalTexto: string[] = []

  GruardarDato(dato: string){
    this.listalTexto.push(dato)
  }*/
    listarproducto: producto[] = []
    guardarlista(productos: producto){
      this.listarproducto.push(productos);
    }
}
