import {
  Component,
  EventEmitter,
  input,
  Input,
  Output,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-receiver',
  imports: [MatButtonModule],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.css',
})
export class ReceiverComponent {
  // @Input() postman: any;
  postman = input<string>();
  private replyWithSignal = signal(
    'This is coming from child(receiver component)'
  );

  @Output() vardhan = new EventEmitter();
  sendReply() {
    this.vardhan.emit(this.replyWithSignal());
  }
}
