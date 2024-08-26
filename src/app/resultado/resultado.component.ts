import { Component } from '@angular/core';
import { questoes } from '../questao/json/questoes.json'

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent {

  resultado: any = {
    final: '',
    texto: ''
  };
  tamanho = questoes.length
  acertos = ''

  constructor(){
    this.atualizaRespostas()
  }

  respostas = {
    verdade: 0,
    meiaverdade: 0,
    mentira: 0
  }

  atualizaResultado(){
    if (this.respostas.verdade >= this.tamanho - 1) 
    {
      this.resultado.final = "BEM"
      this.resultado.texto = "Você já está muito bem informado sobre as principais Fake News do Brasil e mundo, porém é necessário sempre checar fontes e informações. Buscar conhecimento sempre é importante!"
      return
    }
    if (this.respostas.verdade >= this.tamanho / 2) {
      this.resultado.final = "OK"
      this.resultado.texto = "Você já conhece algumas Fake News e sabe se informar, porém ainda precisa buscar conhecimento sobre alguns assunto. Esse teste é um alerta para você buscar mais informações sobre notícias e se informar melhor!"
      return
    }
    this.resultado.final = "RUIM" 
    this.resultado.texto = "Você precisa buscar mais conhecimentos sobre as notícias! Essas Fake News são antigas e já foram desmitificadas e explicadas. Espero que esse texte tenha te ajudado a conhecer melhore essas notícias a ponto que você possa procurar por melhores fontes e buscar informações!"
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

    this.acertos += 'Acertos: ' + this.respostas.verdade + ' Erros: ' + (this.respostas.meiaverdade + this.respostas.mentira)

    this.atualizaResultado()
  }
}
