import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { LoggerService } from '../../services/logger.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  constructor(private logger: LoggerService) {}
  /* Mon menu */
  getTodos(): Todo[] {
    return this.todos;
  }
  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }
  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
  logTodos(): void {
    this.logger.log(this.todos);
  }
}
