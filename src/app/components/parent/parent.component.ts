import {
  Component,
  ComponentRef,
  EnvironmentInjector,
  Inject,
  inject,
  Injector,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-parent',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  @ViewChild('childHost', { read: ViewContainerRef }) vcr: ViewContainerRef;
  childRef: ComponentRef<ChildComponent>;
  private injector = inject(Injector);
  // constructor(private injector: Injector){}
  private envInjector = inject(EnvironmentInjector);
  msgToChild = ' This message is sent from Parent';
  childMessage: any;
  ngAfterViewInit() {
    this.childRef = this.vcr.createComponent(ChildComponent, {
      environmentInjector: this.envInjector,
      injector: this.injector,
    });
    this.childRef.setInput('message', this.msgToChild);
    this.childMessage = this.childRef?.instance?.childMessage;
  }

  callChildMethod() {
    this.childRef?.instance?.showMessage();
  }
}
