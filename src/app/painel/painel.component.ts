import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases.mock'

import { ProgressoComponent } from '../progresso/progresso.component';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})

export class PainelComponent {

  public frases: Array<Frase> = FRASES

  //string interpolation - mostra a mensagem na tela
  public instrucao: string = 'Traduza essa frase:'

  //guarda a string final do que o usuario digitou na area de texto
  public respostaFinal: string = ''

  //ambas variaveis define numero de rodadas e qual frase aparecerá na tela
  public rodada: number = 0
  public rodadaFrase: Frase

  //controla a barra de progresso
  public barraDeProgresso: number = 0

  //controla o numero de tentativas restantes
  public QtdTentativas: number = 3

  public textoDefault: string = ' '

  //variavel que decide quando o jogo termina e que será enviado para o componente pai
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {

    //a frase em ingles é escolhida de acordo com o numero da rodada em questao
    this.atualizaRodada()

  }

  ngOnInit() {
    
  }

  ngOnDestroy() {

    console.log('Painel foi excluido')

  }

  public atualizaResposta(resposta: any): void {

    this.respostaFinal = (<HTMLInputElement>resposta.target).value

  }

  public verificaResposta(): void {

    if(this.rodadaFrase.frasePtBr == this.respostaFinal) {

      //trocar pergunta da rodada
      this.rodada++
      this.rodadaFrase = this.frases[this.rodada]

      this.barraDeProgresso = this.barraDeProgresso + (100 / this.frases.length)

      //termina jogo apos todas rodadas
      if(this.rodada === 4) {
        this.barraDeProgresso = 100
        this.encerrarJogo.emit('vitoria')
      }

    } else {
      
      //diminuir a quantidade de tentativas
      this.QtdTentativas--

      if(this.QtdTentativas == -1) {
        this.encerrarJogo.emit('derrota')
      } 

    }    

    this.atualizaRodada()
    
  }

  public atualizaRodada(): void {

    //mostra a nova frase da rodada
    this.rodadaFrase = this.frases[this.rodada]

    //limpa a area de texto
    this.respostaFinal = ''
    
  }
 
}


