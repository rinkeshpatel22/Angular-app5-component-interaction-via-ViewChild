import { Component, ViewChild } from '@angular/core';
import { DemoChildComponent } from './demo-child/demo-child.component';

@Component({
  selector: 'app-demo-parent',
  templateUrl: './demo-parent.component.html',
  styleUrls: ['./demo-parent.component.css']
})
export class DemoParentComponent {

  // declare childComponent (create instance of DemoChildComponent)
  @ViewChild(DemoChildComponent) private childComponent: DemoChildComponent;

  public showAlert(): void {
    this.childComponent.alertFromChild();
  }
}
