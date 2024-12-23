import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TirarComponent } from "./tirar/tirar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TirarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicio16';
}
