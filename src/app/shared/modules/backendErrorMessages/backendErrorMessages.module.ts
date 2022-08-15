import { BackendErrorMessagesComponent } from './components/backendErrorMessages/backendErrorMessages/backendErrorMessages.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [BackendErrorMessagesComponent],
  exports: [BackendErrorMessagesComponent],
})
export class BackErrorMessagesModule {}
