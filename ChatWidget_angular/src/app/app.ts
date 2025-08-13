import { Component } from '@angular/core';
import { ChatWidget } from './chat-widget/chat-widget';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChatWidget],
  template: `
    <h1>Angular Chat Widget Demo</h1>
    <app-chat-widget></app-chat-widget>
  `
})
export class App {}
