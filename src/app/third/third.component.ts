import { Component } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {

  public data = "_____";

  public fun()
  {
    return "Marvellous Infosytems";
  }
  public Nihal()
  {
    this.data= "Marvellous Infosytems...";
  }

}
