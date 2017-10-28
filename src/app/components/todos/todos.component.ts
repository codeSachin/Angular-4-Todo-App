import { Component, OnInit } from '@angular/core';
import { TodoService } from "../../services/todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  oldText;
  appState = 'default';
  constructor(public todoservice: TodoService) { }

  ngOnInit() {
    this.todos = this.todoservice.getTodos();
  }
  addTodo(){
    var newTodo = {
      text: this.text,      
    }
    this.todos.unshift(
      newTodo
    );    

    this.todoservice.addTodo(newTodo);

  }

  deleteTodo(text){
    for(let i = 0; i<this.todos.length; i++)
    {
      if(this.todos[i].text === text)
      {
        this.todos.splice(i,1);
      }
    }

    this.todoservice.deleteTodo(text);

  }

  editTodo(todo){
    this.appState = 'edit';
    this.oldText = todo.text;
    this.text = todo.text;
  }

  updateTodo(){
    for(let i = 0; i<this.todos.length; i++)
    {
      if(this.todos[i].text === this.oldText)
      {
        this.todos[i].text = this.text;
      }
    }
    this.todoservice.updateTodo(this.oldText, this.text);
  }

}
