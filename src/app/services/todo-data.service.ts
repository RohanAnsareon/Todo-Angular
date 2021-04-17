import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

const TODOS = 'todos';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  private todos: Todo[] = [];

  constructor() {
    this.todos = JSON.parse(localStorage.getItem(TODOS) || '[]');
  }

  add(title: string) {
    this.todos.push({
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      title: title,
      completed: false,
      createDate: new Date()
    });
    this.commit();
  }

  get() {
    return this.todos;
  }

  toggle(id: number, state: boolean) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = state;
    }
    this.commit();
  }

  delete(id: number) {
    this.todos.splice(this.todos.findIndex(todo => todo.id == id), 1);
    this.commit();
  }

  private commit() {
    localStorage.setItem(TODOS, JSON.stringify(this.todos));
  }
}