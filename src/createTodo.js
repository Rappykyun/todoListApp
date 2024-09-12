function createTodo(title, description, dueDate, priority, notes, checklist) {
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
    completed: false,
  };
}

export default createTodo;
