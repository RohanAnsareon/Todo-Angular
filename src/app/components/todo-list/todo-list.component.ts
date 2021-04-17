import { Component, OnInit } from '@angular/core';
import { TodoDataService } from 'src/app/services/todo-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  constructor(public todoService: TodoDataService) { }

  ngOnInit(): void { }

}
