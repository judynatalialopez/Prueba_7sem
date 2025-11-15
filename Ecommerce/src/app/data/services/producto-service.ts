import {  inject,Injectable } from '@angular/core';
import { producto } from '../interfaces-model/producto.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {

   private http = inject(HttpClient)
  apiUrl = "https://fakestoreapi.com/products"
 
  listarproducto: producto[] = [];

  obtenerproducto(){
    return this.listarproducto
  }
  guardarlista(productos: producto) {
    this.listarproducto.push(productos);
  }

  ListarCompraProducto: producto[] = [];
  CompararProduct(producto: producto) {
    this.ListarCompraProducto.push(producto);
  }
  EliminarProductoDelCarrito(productos) {
    this.ListarCompraProducto.splice(productos, 1);
  }

   getProductos(): Observable<producto[]> {
    return this.http.get<producto[]>(this.apiUrl);
  }

   crearProducto(data: producto): Observable<producto> {
    return this.http.post<producto>(this.apiUrl, data);
  }
}
