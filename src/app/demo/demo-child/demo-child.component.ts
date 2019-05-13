import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-child',
  templateUrl: './demo-child.component.html',
  styleUrls: ['./demo-child.component.css']
})
export class DemoChildComponent {

  public message: string = "This is Child component.";

  public alertFromChild(): void{
    alert(this.message);
  }
}
