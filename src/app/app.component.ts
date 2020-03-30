import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  nome = null;
  idade = null;
  lista =[];
  pessoaMaisJovem = null;
  pessoaMaisVelha = null;
  
  cadastrar(){
    if(this.nome != null && this.idade != null ){
      this.nome = this.nome.trim();
      if(this.nome.length > 0){
        this.lista.push({
          nome: this.nome,
          idade: this.idade
        });
      }
    }
    this.nome = null;
    this.idade = null;
    this.atualizarEstatisticas();
  }

  remover(pessoa){
    const i = this.lista.indexOf(pessoa);
    this.lista.splice(i, 1);
    this.atualizarEstatisticas();
  }

  atualizarEstatisticas(){
    let copia = Object.create(this.lista);
    copia.sort((p1: any, p2:any) => p1.idade - p2.idade);
    this.pessoaMaisJovem = copia[0];

    copia.sort((p1: any, p2:any) => p2.idade - p1.idade);
    this.pessoaMaisVelha = copia[0];
  }
}
