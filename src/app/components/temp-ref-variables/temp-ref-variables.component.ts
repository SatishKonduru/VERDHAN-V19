import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { single } from 'rxjs';
@Component({
  selector: 'app-temp-ref-variables',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './temp-ref-variables.component.html',
  styleUrl: './temp-ref-variables.component.css',
})
export class TempRefVariablesComponent {
  // message = '';
  // message2 = '';
  message = signal('');
  message2 = signal('');
  getInputValue(value: any) {
    // this.message = value;
    this.message.set(value);
  }
  // getInputValue(e: InputEvent) {
  //   this.message = (e.target as HTMLInputElement).value;
  // }
}
