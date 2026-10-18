import { Service, signal } from '@angular/core';
import { User } from '../models/User';

@Service()
export class UserService {
    userList = signal<User[]>([
        {id: 1, name: 'John Doe', email: 'john.doe@example.com', isShown:false},
        {id: 2, name: 'Mary Jane', email: 'mary.jane@example.com', isShown:false},
        {id: 3, name: 'Ricky Doe', email: 'ricky.doe@example.com', isShown:false},
        {id: 4, name: 'Jane Smith', email: 'jane.smith@example.com', isShown:false},
        {id: 5, name: 'Bob Johnson', email: 'bob.johnson@example.com', isShown:false},
    ]);
    changeIsShown(id:number){
        this.userList().forEach(element => {
            if (element.id == id){
                element.isShown = !element.isShown;
            }
        });
    }

}
