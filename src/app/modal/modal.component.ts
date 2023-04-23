import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  constructor(public modalRef: MdbModalRef<ModalComponent>) {}

  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  }
}