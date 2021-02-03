import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Data Binding Example';

  subTitle: string = "Ez egy subtitle.";

  btnDisabled: boolean = false;

  users: User[] = [];

  constructor() {
    setTimeout(() => {
      this.users = [
        new User(1, 'Józsi', 'jozsi@email.com'),
        new User(2, 'Rozi', 'rozi@email.com'),
        new User(3, 'Jani', 'jani@email.com'),
      ];
    }, 5000);
  }

  onSwitchDisabled(): void {
    this.btnDisabled = !this.btnDisabled
  }

  onShowGreeting(): void {
    alert('Szia, én vagyok a User bizony.')
  }

  onDeleteUser(user: User): void {
    let index = 0;
    for (let i = 0; i < this.users.length; i += 1) {
      if (user.id === this.users[i].id) {
        index = i;
      }
    }

    this.users.splice(index, 1);
  }
}
