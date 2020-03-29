import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  pessoas = null;
  lista =[];
  
  cadastrar(){
    if(this.pessoas != null ){
      this.pessoas = this.pessoas.trim();
      if(this.pessoas.length > 0){
        this.lista.push(this.pessoas);
      }
    }
    this.pessoas = null;
  }

  remover(pessoa){
    const i = this.lista.indexOf(pessoa);
    this.lista.splice(i, 1);
  }
}
