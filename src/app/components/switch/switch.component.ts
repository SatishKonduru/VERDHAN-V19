import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-switch',
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, FormsModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css',
})
export class SwitchComponent {
  userRole = signal('');
  color = '';
  paymentMethod = '';
}
