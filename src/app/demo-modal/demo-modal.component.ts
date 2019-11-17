import { Component, OnInit } from '@angular/core';
import { ModalContainer } from '../modal/modal.container';

@Component({
  selector: 'app-demo-modal',
  templateUrl: './demo-modal.component.html',
  styleUrls: ['./demo-modal.component.scss']
})
export class DemoModalComponent extends ModalContainer implements OnInit {
  onSubmit: Function;
  constructor() {
    super();
  }

  ngOnInit() {
  }

  close() {
    this.closeModal();
  }

  save() {
    this.onSubmit({ success: true });
    this.close();
  }

}
