import { Component, inject } from '@angular/core';
import { ToDoList } from '../services/to-do-list';

@Component({
  imports: [],
  selector: 'app-to-do-list-component',
  styleUrl: './to-do-list-component.css',
  templateUrl: './to-do-list-component.html',
})
export class ToDoListComponent {
  service:ToDoList = inject(ToDoList);
  addingTask(textInput:any){
    this.service.addTask(textInput.value);
    textInput.value = "";
  }
  editingTask(id:number, input:any, edEl:any){
    this.service.editTask(id, input.value);
    input.value = "";
    edEl.hidden = true;
  }
}
