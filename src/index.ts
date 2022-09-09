import TodoList from './TodoList';

const todoList = new TodoList();
todoList.addTodo('test contents', 'category1', ['javascript', 'jsdoc']);
todoList.addTodo('test contents', 'category1', ['javascript', 'jsdoc']);

let testTodo = todoList.getTodo(2);
if (testTodo !== undefined) testTodo.complete();

console.log(todoList.getAllTodos());
