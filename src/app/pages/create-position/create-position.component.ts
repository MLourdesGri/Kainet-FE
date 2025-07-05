import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Position, PositionsService } from '../../services/positions.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-create-position',
  imports: [CommonModule, FormsModule, NgFor],
  templateUrl: './create-position.component.html',
  styleUrl: './create-position.component.css'
})
export class CreatePositionComponent {
  form: Partial<Position> = {
    idEmpresa: 0,
    idProducto: 0  ,
    fechaEntregaInicio: '',
    precio: 0,
    moneda: ''
  };
  empresas: any[] = [];
  productos: any[] = [];

  constructor(private positionsService: PositionsService, private router: Router) {}

  ngOnInit() {
  this.positionsService.getEmpresas().subscribe(data => this.empresas = data);
  this.positionsService.getProductos().subscribe(data => this.productos = data);
}

  createPosition() {
    console.log('Creating position with data:', this.form);
    this.positionsService.createPosition(this.form).subscribe(() => {
      this.router.navigate(['/']); 
    });
  }
}
