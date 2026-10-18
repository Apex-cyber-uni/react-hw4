import { Service, signal } from '@angular/core';
import { ToDoTask } from '../models/ToDoTask';

@Service()
export class ToDoList {
    tasksList = signal<ToDoTask[]>([]);
    addTask(text:string){
        let newId:number = Math.max(...this.tasksList().map(task=>task.id))+1;
        this.tasksList.update(currTask=>[
            ...currTask,
            {id:newId, text:text, isCompleted:false}
        ]);
    }
    delTask(id:number){
        this.tasksList.update(list=>list.filter(task=>task.id!=id));
    }
    editTask(id:number, text:string){
        this.tasksList.update(tasks =>
            tasks.map(task => task.id === id ? { ...task, text } : task)
        );
    }
}
