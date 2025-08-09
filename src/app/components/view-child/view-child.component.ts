import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { TooltipComponent } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { TopicComponent } from '../topic/topic.component';
@Component({
  selector: 'app-view-child',
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    TopicComponent,
  ],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css',
})
export class ViewChildComponent {
  topicName = '@ViewChild';
  // @ViewChild('input') el: ElementRef;
  // @ViewChild('input', { static: true }) inputStaticTrue: ElementRef;

  // @ViewChild('input', { static: false }) inputStaticFalse: ElementRef;

  // inputValueWithRef: any;
  // inputValueWithViewChild: any;
  // getValueWithRef(el: HTMLInputElement) {
  //   this.inputValueWithRef = el.value;
  // }
  // getValueWithViewChild() {
  //   this.inputValueWithViewChild = this.el.nativeElement.value;
  // }

  // ngOnInit(): void {
  //   console.log('ngOnInit Called....');
  //   console.log(
  //     'inputStaticTrue value in OnInit: ',
  //     this.inputStaticTrue.nativeElement.value
  //   );

  //   console.log(
  //     'inputStaticFalse value in OnInit: ',
  //     this.inputStaticFalse.nativeElement.value
  //   );
  // }

  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit Called....');
  //   console.log(
  //     'inputStaticTrue value in AfterViewInit: ',
  //     this.inputStaticTrue.nativeElement.value
  //   );

  //   console.log(
  //     'inputStaticFalse value in AfterViewInit: ',
  //     this.inputStaticFalse.nativeElement.value
  //   );
  // }

  @ViewChild('input') el: ElementRef;
  inputValueWithRef = signal<string>('');
  inputValueWithViewChild = signal<string>('');
  getValueWithRef(el: HTMLInputElement) {
    this.inputValueWithRef.set(el.value);
  }
  getValueWithViewChild() {
    const value = this.el?.nativeElement?.value ?? '';
    this.inputValueWithViewChild.set(value);
  }
}
