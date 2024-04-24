import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculos-edad',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculos-edad.component.html',
  styleUrl: './calculos-edad.component.css'
})
export class CalculosEdadComponent {
  edadUno: string = '';
  edadDos: string = '';
  promedio: number = 0;
  suma: number = 0;

  calcular(): void {
    this.suma = parseInt(this.edadUno) + parseInt(this.edadDos);
    this.promedio = (parseInt(this.edadUno) + parseInt(this.edadDos)) / 2;
  }

  limpiar(): void {
    this.edadUno = '';
    this.edadDos = '';
    this.promedio = 0;
    this.suma = 0;
  }
}
