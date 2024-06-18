import { AuthService } from './../../services/auth.service';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

private auth = inject(AuthService);
private router = inject(Router)


  async logout(){
    this.auth.signout().then(() => {
       this.router.navigate(['/login']);
    }).catch((err) => {
      alert(err.message);
    })
  }
}
