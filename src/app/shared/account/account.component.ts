import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  public exit(): boolean{
    if (confirm("Deseja Sair?")){
      return true;
    }
    return false;
  }
}
