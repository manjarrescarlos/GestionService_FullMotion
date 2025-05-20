import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  openWhatsApp() {
    window.open('https://wa.me/573001234567', '_blank');
  }
  

}
