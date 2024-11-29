import { Component, ElementRef, viewChild } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  constructor(private tasksService: TasksService) {}

  onAddTasks(title: string, description: string) {
    this.tasksService.addTask({ title: title, description: description });
    this.formEl()?.nativeElement.reset();
  }
}
