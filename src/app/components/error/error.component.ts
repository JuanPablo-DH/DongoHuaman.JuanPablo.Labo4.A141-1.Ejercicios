import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
  private router:Router;

  constructor() {
    this.router = inject(Router);
  }

  volver() {
    this.router.navigateByUrl("/bienvenido");
  }
}
