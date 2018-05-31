import { Injectable } from '@angular/core';

// create an injectable, app-wide MessageService for sending messages to be displayed
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  constructor() { }

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
