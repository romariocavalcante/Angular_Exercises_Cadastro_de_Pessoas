import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'projeto';
  pessoas = null;
  lista =[]
  cadastrar(){
    if(this.pessoas != null ){
      this.pessoas = this.pessoas.trim();
      if(this.pessoas.length > 0){
        this.lista.push(this.pessoas);
      }
    }
    this.pessoas = null;
  }
}
