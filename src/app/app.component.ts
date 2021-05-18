import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My To List';

  todos = [
    {
      label:'Bring Milk',
      done:false,
      priority:3
    },
    {
      label:'Bring Bread',
      done:true,
      priority:2
    },
    {
      label:'Bring Coffee',
      done:false,
      priority:1
    },
    {
      label:'Bring Tea Leaves',
      done:true,
      priority:3
    },
    {
      label:'Bring Uji',
      done:false,
      priority:4
    },
    {
      label:'Bring Sugar',
      done:true,
      priority:3
    },

];

  addTodo(newTodoLabel){
    var newTodo = {
      label: newTodoLabel,
      priority:1,
      done:false
    };
    this.todos.push(newTodo)
  }

  deletingTodo(todo){
    this.todos = this.todos.filter(t => t.label !== todo.label );
  }
}
