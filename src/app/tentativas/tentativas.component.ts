import { Component, Input, OnChanges } from '@angular/core';

import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent {

  //declarar aqui o link das imagens png, referenciar no template apenas a variavel
  public coracaoVazio: string = ' assets/heartempty.png '
  public coracaoCheio: string = ' assets/heartfull.png '

  @Input() public tentativas: number

  public coracoes: Array<Coracao> = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

  constructor() {

    console.log(this.coracoes)

  }

  ngOnChanges() {

    if(this.tentativas !== this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas
      this.coracoes[indice - 1].cheio = false
    }

    console.log('numeros de tentativas recebida do painel: '+this.tentativas)

  }

}
