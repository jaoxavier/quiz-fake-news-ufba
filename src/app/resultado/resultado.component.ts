import { Component } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent {

  constructor(){
    this.atualizaRespostas()
  }

  respostas = {
    verdade: 0,
    meiaverdade: 0,
    mentira: 0
  }

  getLocalStorage(){
    let data = localStorage.getItem("respostas");
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }

  atualizaRespostas(){
    let data = this.getLocalStorage();
    
    for (let i = 0; i < Object.keys(data).length; i++) {
      if (data[i.toString()] == 1){
        this.respostas.verdade += 1
        continue
      }
      
      if (data[i.toString()] == 2){
        this.respostas.meiaverdade += 1
        continue
      }
      
      if (data[i.toString()] == 3){
        this.respostas.mentira += 1
      }
    }
  }
}
