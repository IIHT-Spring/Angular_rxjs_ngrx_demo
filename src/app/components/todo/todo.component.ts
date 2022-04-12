import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { TodoRemove } from 'src/app/actions/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[];

  constructor(private store: Store<{ todos: Todo[] }>) {
    store.pipe(select('todos')).subscribe((values) => {
      this.todos = values;
      console.log(values);
    });
  }
  removeTodo(index: number) {
    this.store.dispatch(new TodoRemove(index))
  }

  ngOnInit(): void {}
}
