import { Component } from '@angular/core';
import { DadoComponent } from "../dado/dado.component";

@Component({
  selector: 'app-tirar',
  imports: [DadoComponent],
  templateUrl: './tirar.component.html',
  styleUrl: './tirar.component.css'
})
export class TirarComponent {

  n1: number = 0
  n2: number = 0
  n3: number = 0
  resultado: string = "Tira para jugar"

  tirar() {
    this.n1 = Math.floor(Math.random() * 5) + 1
    this.n2 = Math.floor(Math.random() * 5) + 1
    this.n3 = Math.floor(Math.random() * 5) + 1

    if (this.n1 == this.n2 && this.n1 == this.n3) {
      this.resultado = "Felicidades ganaste"
    } else {
      this.resultado = "Perdiste vuelve a intentar"
    }
  }


}
