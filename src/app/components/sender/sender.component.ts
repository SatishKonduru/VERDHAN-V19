import { Component, Input, signal } from '@angular/core';
import { ReceiverComponent } from '../receiver/receiver.component';

@Component({
  selector: 'app-sender',
  imports: [ReceiverComponent],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css',
})
export class SenderComponent {
  message = 'This is is from Parent Component';
  data: any;
  @Input() returnPostman;
  incomingMsg = signal<string>('');
  updateIncomingMsg(msg: string) {
    this.incomingMsg.set(msg);
  }
}
