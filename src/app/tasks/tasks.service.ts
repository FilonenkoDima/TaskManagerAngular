import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks = signal<Task[]>([]);

  addTask(taskData: { title: string; description: string }) {
    const newTask = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN' as TaskStatus,
    };
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
  }
}
