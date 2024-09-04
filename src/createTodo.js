export default createTodo;
function createTodo(title, description, dueDate, priority, notes, checklist) {
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
  };
}
