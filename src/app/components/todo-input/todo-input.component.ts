import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TodoDataService } from 'src/app/services/todo-data.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodoInputComponent implements OnInit {
  todoForm: FormGroup;
  todoNameControl = new FormControl('');

  constructor(fb: FormBuilder, private todoService: TodoDataService) {
    this.todoForm = fb.group({
      todoName: this.todoNameControl
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.todoService.add(this.todoForm.value.todoName);
    this.todoNameControl.setValue('');
  }

}
