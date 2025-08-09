import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  message = input<string>('');
  childMessage = " This is Child's NEW Message ";
  showMessage() {
    alert('Child Says: ' + this.message());
  }
}
