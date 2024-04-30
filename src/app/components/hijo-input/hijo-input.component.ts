import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hijo-input.component.html',
  styleUrl: './hijo-input.component.css'
})
export class HijoInputComponent {
  @Input() variableHijo:string = "por defecto";
  @Output() agregarEvent = new EventEmitter<string>();
  @Input() arrayHijo:string[] = [];

  nombre:string = "";

  agregar()
  {
    this.agregarEvent.emit(this.nombre);
  }
}
