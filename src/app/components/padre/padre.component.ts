import { Component } from '@angular/core';
import { HijoInputComponent } from '../hijo-input/hijo-input.component';
import { HijoOutputComponent } from '../hijo-output/hijo-output.component';
import { HijoMostrarComponent } from '../hijo-mostrar/hijo-mostrar.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoInputComponent, HijoOutputComponent, HijoMostrarComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  variablePadre = "ejemplo";
  arrayNombres:string[] = [];

  recibirAgregar($event: any)
  {
    this.arrayNombres.push($event);
    console.log(this.arrayNombres);
  }
}
