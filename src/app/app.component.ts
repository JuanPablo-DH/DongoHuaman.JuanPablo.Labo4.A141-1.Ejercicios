import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Usuario } from './classes/usuario';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}