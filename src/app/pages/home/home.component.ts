import { Component, OnInit } from '@angular/core';
import { PositionWithDetails, PositionsService } from '../../services/positions.service';
import { CommonModule, NgIf } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [NgIf, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  positions: PositionWithDetails[] = [];
  loading = true;

  constructor(private positionsService: PositionsService) {}

  ngOnInit(): void {
    this.positionsService.getPositions().subscribe({
      next: (data) => {
        this.positions = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar posiciones', err);
        this.loading = false;
      }
    });
  }
}
