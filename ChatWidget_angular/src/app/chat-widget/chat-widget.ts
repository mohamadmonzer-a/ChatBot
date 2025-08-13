import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  templateUrl: './chat-widget.html',
  styleUrls: ['./chat-widget.css']
})
export class ChatWidget implements AfterViewInit {

  ngAfterViewInit() {
    (window as any).ChatWidgetConfig = {
      webhook: {
        url: 'https://casual-assured-caiman.ngrok-free.app/webhook/d9b901d8-8391-40de-be7e-4836a037055d/chat',
        route: 'general'
      },
      branding: {
        logo: 'https://cryptototem.com/wp-content/uploads/2024/11/Agent-AI-logo.jpg',
        name: 'ChatAi',
        welcomeText: '',
        responseTimeText: ''
      },
      style: {
        primaryColor: '',
        secondaryColor: '',
        position: 'right',
        backgroundColor: '',
        fontColor: ''
      },
      suggestedQuestions: [
        "What products do you offer?",
        "How can I contact support?",
        "Where can I buy this item?",
        "Tell me more about your services"
      ]
    };

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/funtastic418/chat-widget@main/chat-widget.js';
    script.async = true;
    document.body.appendChild(script);
  }
}
