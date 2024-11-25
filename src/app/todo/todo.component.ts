import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  taskForm: FormGroup;
  tasks: Task[] = [];

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      task: ['']
    });
  }

  get pendingTasksCount(): number {
    return this.tasks.filter(task => !task.completed).length;
  }

  get completedTasksCount(): number {
    return this.tasks.filter(task => task.completed).length;
  }

  addTask() {
    const taskValue = this.taskForm.get('task')?.value;
    if (taskValue) {
      this.tasks.push({ name: taskValue, completed: false });
      this.taskForm.reset();
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  toggleTaskCompletion(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  clearCompletedTasks() {
    this.tasks = this.tasks.filter(task => !task.completed);
  }
}
