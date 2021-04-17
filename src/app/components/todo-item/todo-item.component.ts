import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoDataService } from 'src/app/services/todo-data.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo = {id: 1, title: 'Empty', completed: false, createDate: new Date()};

  constructor(private todoService: TodoDataService) { }

  ngOnInit(): void {
  }

  handleToggle() {
    this.todoService.toggle(this.todo.id, !this.todo.completed);
  }

  handleDelete() {
    this.todoService.delete(this.todo.id);
  }
}
