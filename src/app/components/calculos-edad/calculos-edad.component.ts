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
  edadUno : number = 0;
  edadDos : number = 0;
  promedio : number = 0;
  suma : number = 0;

  calcular() : void {
    this.suma = this.edadUno + this.edadDos;
    this.promedio = (this.edadUno + this.edadDos) / 2;
  }
  limpiar() : void {
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = 0;
    this.suma = 0;
  }
}
