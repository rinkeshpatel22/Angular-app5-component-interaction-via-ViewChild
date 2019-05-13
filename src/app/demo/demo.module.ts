import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoParentComponent } from './demo-parent.component';
import { DemoChildComponent } from './demo-child/demo-child.component';

@NgModule({
  declarations: [DemoParentComponent, DemoChildComponent],
  exports: [DemoParentComponent],
  imports: [
    CommonModule
  ]
})
export class DemoModule { }
