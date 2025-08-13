---

```markdown
# Angular Chat Widget

This project demonstrates how to integrate a **chat widget** as a **reusable Angular component**. It is designed as a standalone component and can be shared or imported into other Angular projects.

---

## **Project Structure**

```

chat-widget-angular/
├── src/
│   ├── app/
│   │   ├── chat-widget/
│   │   │   ├── chat-widget.ts        ← ChatWidget component logic
│   │   │   ├── chat-widget.html      ← Placeholder HTML
│   │   │   ├── chat-widget.css       ← Custom styles (e.g., hide chat footer)
│   │   │   └── chat-widget.spec.ts   ← Unit test file (optional)
│   │   └── app.ts                    ← Main Angular root component
├── angular.json
├── package.json
└── README.md

````

---

## **1. Prerequisites**

Before running the project, make sure you have:

- **Node.js v18+** installed → [Download Node.js](https://nodejs.org/)
- **Angular CLI** installed globally:
```bash
npm install -g @angular/cli
````

* A code editor like **VS Code**

---

## **2. Setting up the Angular Project**

If you don’t have the project yet, create it:

```bash
ng new chat-widget-angular
cd chat-widget-angular
```

* Routing: **No**
* Stylesheet: **CSS**
* Zoneless: **No**

---

## **3. Create Chat Widget Component**

```bash
ng generate component chat-widget
```

This creates:

* `chat-widget.ts`
* `chat-widget.html`
* `chat-widget.css`
* `chat-widget.spec.ts`

---

## **4. Component Code**

**chat-widget.ts**

```ts
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
```

**chat-widget.html**

```html
<div>Chat Widget is loading...</div>
```

**chat-widget.css**

```css
.chat-footer {
  display: none !important;
}
```

**chat-widget.spec.ts**

* Leave as-is (optional testing file).

---

## **5. Root App Component**

Standalone Angular requires importing your component. Edit `src/app/app.ts`:

```ts
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
```

---

## **6. Running the Project**

From the project root:

```bash
npm install
ng serve
```

Open your browser: [http://localhost:4200](http://localhost:4200)

You should see:

* Title: **Angular Chat Widget Demo**
* The chat widget appears on the right side (loaded from the external JS)

---

## **7. Sharing the Component**

**Option 1 — Share full project:**
Send the entire folder except `node_modules/`. Your friend can run:

```bash
npm install
ng serve
```

**Option 2 — Share only component:**
Send these three files:

```
chat-widget.ts
chat-widget.html
chat-widget.css
```

* Place them in `src/app/chat-widget/`
* Import `ChatWidget` into their `app.ts` as shown above.

---

## **8. Notes**

* The widget is loaded dynamically via JS; check the console if it doesn’t appear.
* You can modify `ChatWidgetConfig` for branding, webhook URLs, colors, and suggested questions.
* `.chat-footer { display: none !important; }` hides the footer — you can add more CSS customizations.

---

This README provides **everything needed** to run, test, and share your Angular Chat Widget.

```

---

