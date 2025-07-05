import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Position {
  idEmpresa: number;
  idProducto: number;
  fechaEntregaInicio: string;
  precio: number;
  moneda: string;
}
@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  private apiUrl = 'http://127.0.0.1:8000/api/posiciones'; 

  constructor(private http: HttpClient) {}

  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(this.apiUrl);
  }

  createPosition(position: Partial<Position>): Observable<any> {
  return this.http.post(this.apiUrl, position);
  }

  getEmpresas(): Observable<any[]> {
  return this.http.get<any[]>('http://localhost:8000/api/empresas');
  }

  getProductos(): Observable<any[]> {
  return this.http.get<any[]>('http://localhost:8000/api/productos');
}
}
