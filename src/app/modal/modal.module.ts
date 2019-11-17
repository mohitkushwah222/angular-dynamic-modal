import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalPlaceholderComponent } from './modal-placeholder/modal-placeholder.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ModalPlaceholderComponent],
  exports: [ModalPlaceholderComponent]
})
export class ModalModule { }
