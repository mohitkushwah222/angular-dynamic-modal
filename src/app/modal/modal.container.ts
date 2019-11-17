import { OnInit, OnDestroy } from '@angular/core';

export class ModalContainer implements OnInit, OnDestroy {
    destroy: Function;
    componentIndex: Number;
    constructor() {
        document.querySelector('body').style.overflow = 'hidden';
    }
    
    ngOnInit() {
    }

    closeModal(): void {
        this.destroy();
    }

    ngOnDestroy() {
        document.querySelector('body').style.overflow = 'auto';
    }
}
