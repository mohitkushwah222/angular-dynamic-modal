import { Component, ComponentFactoryResolver } from '@angular/core';
import { ModalService } from './modal/modal.service';
import { DemoModalComponent } from './demo-modal/demo-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-dynamic-modal';
  constructor(
    private modalService: ModalService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {

  }
  openModal() {
    const modal = this.componentFactoryResolver.resolveComponentFactory(DemoModalComponent);
    const modal$ = this.modalService.createFromFactory(modal, {
      isAdd: false,
      onSubmit: (res) => {
        console.log(res);
      }
    });
  }
}
