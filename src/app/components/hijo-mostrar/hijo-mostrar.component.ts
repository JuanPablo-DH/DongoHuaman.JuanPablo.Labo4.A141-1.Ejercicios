import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo-mostrar',
  standalone: true,
  imports: [],
  templateUrl: './hijo-mostrar.component.html',
  styleUrl: './hijo-mostrar.component.css'
})
export class HijoMostrarComponent {
  logged = true;
  @Input() array:string[] = [];
}
