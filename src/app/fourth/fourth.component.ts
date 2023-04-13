import { Component } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent {

  public Name = "Marvellous Infosystems ";
  public data = "____";
  public data2 = "____"

  public Upper()
  {
    this.data = this.Name.toUpperCase();
    
  }
  public Lower()
  {
    this.data2 = this.Name.toLowerCase();
    
  }

}
