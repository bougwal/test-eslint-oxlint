import {AfterContentInit, AfterViewInit, Component, Input, ViewChild, inject} from '@angular/core';
import { Service } from './service'

@Component({selector: 'grand-child', template: `{{hello}}`})
export class GrandChild {
  @Input() hello: unknown
  Instance = inject(Service)
}
@Component({
  selector: 'parent',
  template: `<ng-content select="[grand-child]" #ref/>
  `,
})
export class Parent implements AfterContentInit {
  @ViewChild('ref') GrandChild!: GrandChild
  ngAfterContentInit(): void {
      console.log(this.GrandChild)
  }
}
@Component({
  selector: 'grand-parent',
  template: `
    <parent>
     <grand-child hello="Hi" grand-child/>
    </parent>
  `,
})
export class GrandParent implements AfterViewInit{
  @ViewChild(Parent) parent!: Parent; 

  ngAfterViewInit(): void {
    console.log(this.parent)
  }
}