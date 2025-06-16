import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatRadioChange } from '@angular/material/radio';
import { MatSelectChange } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-event-binding',
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css',
})
export class EventBindingComponent {
  name = '';
  result = '';
  inputValue = '';
  selectionValue = '';
  isChecked = false;
  selectedGender = '';
  keyupValue = '';
  keydownValue = '';
  keyEnterValue = '';
  focusStatus = '';
  contextValue = '';
  dragStatus = '';
  scrollStatus = '';
  getName() {
    this.name = 'Satish';
  }
  clearName() {
    this.name = '';
  }
  onDoubleClick() {
    this.result = 'You Double Clicked this Button';
  }

  // onInput(e: InputEvent) {
  //   const value = (e.target as HTMLInputElement).value;
  //   this.inputValue = value;
  // }
  onInput(value: any) {
    this.inputValue = value;
  }
  onChange = (e: MatSelectChange) => {
    this.selectionValue = e.value;
  };

  onCheckboxChange = (e: MatCheckboxChange) => {
    console.log(e);
    this.isChecked = e.checked;
  };

  onGenderChange = (e: MatRadioChange) => {
    this.selectedGender = e.value;
  };

  onKeyUp = (e: KeyboardEvent) => {
    this.keyupValue = e.key;
  };

  onKeyDown = (e: KeyboardEvent) => {
    this.keydownValue = e.key;
  };
  onEnterKey = () => {
    this.keyEnterValue = 'Enter Key Pressed';
  };
  onFocus = () => {
    this.focusStatus = 'Input GOT Focus';
  };
  onBlur = () => {
    this.focusStatus = 'Input LOST Focus';
  };
  onRightClick = (e: MouseEvent) => {
    e.preventDefault();
    this.contextValue = 'Right Clicked';
  };

  onDragStart = (e: DragEvent) => {
    this.dragStatus = 'Dragging Started';
    // set the id of the dragged element under 'dataTrasfer'
    e.dataTransfer?.setData('vardhan', 'dragItem');
  };

  onDragOver = (e: DragEvent) => {
    e.preventDefault();
    this.dragStatus = 'Over the Drop Zone';
  };

  onDrop = (e: DragEvent) => {
    e.preventDefault();
    const draggedElementId = e.dataTransfer?.getData('vardhan');
    const draggedElement = document.getElementById(draggedElementId!);
    // here ! is called 'non-null assertion operator' in TS
    // draggedElementId! => Trust me its a string, not undefined or null
    // so, you can bypass the safety checks
    const dropZone = document.getElementById('dropZone');
    if (draggedElementId && dropZone) {
      dropZone.appendChild(draggedElement);
      this.dragStatus = 'Dropped Successfully';
    } else {
      this.dragStatus = 'Dropping Failed';
    }
  };
  onScroll = (e: Event) => {
    this.scrollStatus = 'YOU SCROLLED';
  };
}
