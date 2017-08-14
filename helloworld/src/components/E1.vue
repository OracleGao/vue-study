<template>
<div class="container" id="app">
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <div class="panel panel-default">
        <div class="panel-heading">Welcome</div>
          <div class="panel-body">
            <h1>{{message}}</h1>
            <input type="text" class="form-control" v-model="message" />
            <h1>my todos</h1>
            <ul class="list-group">
              <li class="list-group-item" v-for="(todo, index) in todos">
                {{todo.title}}
                <button class="btn btn-warning btn-xs pull-right" v-on:click="deleteTodo(index)">delete</button>
              </li>
            </ul>
            <form v-on:submit.prevent="addTodo(newTodo)">
              <div class="form-group">
                <input type="text" class="form-contol" placeholder="add todo" v-model="newTodo.title" />
                <button class="btn btn-success" type="submit">add todo</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'e1',
  data () {
    return {
      message: 'hello world',
      todos: [
        {id: 1, title: 'learn vue'},
        {id: 2, title: 'learn vue2'}
      ],
      newTodo: {id: null, title: ''}
    }
  },
  methods: {
    addTodo: function (newTodo) {
      this.todos.push(newTodo)
      this.newTodo = {id: null, title: ''}
    },
    deleteTodo: function (index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>
<link rel="stylesheet" type="text/css" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">