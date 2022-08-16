import { Component, Input, OnInit } from '@angular/core';
import { BackendErrors } from 'src/app/auth/types/backend-errors.interface';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: BackendErrors;
  errorMessages: string[];

  ngOnInit() {
    this.errorMessages = Object.keys(this.backendErrorsProps).map((field: string) => {
      const messages = this.backendErrorsProps[field].join('');
      return `${field} ${messages}`;
    });
  }
}
