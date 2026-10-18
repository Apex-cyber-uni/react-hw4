import { Component, inject } from '@angular/core';
import { UserService } from '../services/user-service';

@Component({
  imports: [],
  selector: 'app-user-list-component',
  styleUrl: './user-list-component.css',
  templateUrl: './user-list-component.html',
})
export class UserListComponent {
  service: UserService = inject(UserService);
}
