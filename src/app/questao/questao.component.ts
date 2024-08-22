import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { questoes } from './json/questoes.json';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrl: './questao.component.css'
})
export class QuestaoComponent {

  questoes: any = questoes; 
  questao: any;
  questaoAtual: number = -1;
  respostaQuestao!: string;
  respondido: boolean = false;
  iniciar: boolean = false;
  objetoQuestoes: { [key: string]: number } = {};

  
  constructor(private router: Router){
  }
  
  start(){
    this.iniciar = true;
    this.atualizaQuestao();
    this.criaObjetoQuestao();
  }

  resposta(resposta: number){
    this.atualizaRespostaQuestao(resposta);
    this.updateLocalStorage(resposta);
    this.atualizaRespondido();
  }

  
  next(){
    this.atualizaRespondido();
    this.atualizaQuestao();
  }

  atualizaQuestao(){
    this.atualizaQuestaoAtual();
    if (this.questaoAtual == this.questoes.length){
      this.router.navigateByUrl('/resultado');
      return;
    }
    this.questao = this.questoes[this.questaoAtual];
  }

  atualizaQuestaoAtual(){
    this.questaoAtual += 1;
  }
  
  atualizaRespostaQuestao(resposta: number){
    if (resposta == 1) {
      this.respostaQuestao = 'Acertou!';
    }
    if (resposta == 2 || resposta == 3) {
      this.respostaQuestao = 'Errou!';
    }
  }

  atualizaRespondido(){
    this.respondido = !this.respondido
  }

  criaObjetoQuestao(){
    for (let i = 0; i < this.questoes.length; i++) {
      this.objetoQuestoes[i.toString()] = 0
    }
    localStorage.setItem("respostas", JSON.stringify(this.objetoQuestoes))
  }

  getLocalStorage(){
    let data = localStorage.getItem("respostas");    
    if (data) {
      return JSON.parse(data)
    }
    return null
  }

  updateLocalStorage(resposta: number){
    let data = this.getLocalStorage();
    data[this.questaoAtual.toString()] = resposta
    localStorage.setItem("respostas", JSON.stringify(data))
  }
}
