import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
  <ul>
  <li (click)="isDone(currentTask)" *ngFor="let currentTask of childTaskList">{{currentTask.description}} <button (click)="editButtonHasBeenClicked(currentTask)">Edit!</button></li>
  </ul>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  @Output() updateName = new EventEmitter();

  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }

  updateName(newName: string) {
    this.updateName.emit(newName);
  }

   isDone(clickedTask: Task) {
    if(clickedTask.done === true) {
      console.log("This task is done!");
    } else {
      console.log("This task is not done. Better get to work!");
    }
  }

  priorityColor(currentTask){
    if (currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }
}
