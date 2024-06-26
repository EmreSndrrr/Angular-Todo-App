import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    todos: Todo[] = [];
    newTodo:string;

    saveTodo(){
      if(this.newTodo){
        let todo = new Todo();
        todo.name= this.newTodo;
        todo.isCompleted = true
        this.todos.push(todo);
        this.newTodo='';
      }else{
        alert('Todo gir!!!')
      }
    }
    remove(id : number){
      this.todos  = this.todos.filter((v,i) => i !== id)
    }
}
