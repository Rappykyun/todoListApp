function createProject(name) {
  const todos = [];
  return {
    name,
    todos,

    addTodo(todo) {
      this.todos.push(todo);
    },

    removeTodo(todo) {
      const index = this.todos.indexOf(todo);
      if (index > -1) {
        this.todos.splice(index, 1);
      }
    },

    getTodos() {
      return this.todos;
    },
  };
}

export default createProject;
