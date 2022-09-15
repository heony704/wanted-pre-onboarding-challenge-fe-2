import List from "./List";
import Todo from "./Todo";

const todoList = new List<Todo>();
let nextId = "1";

const newTodo = new Todo("1", 'test contents', 'category1', ['javascript', 'jsdoc']);
const nextTodo = new Todo("2", 'test contents', 'category1', ['javascript', 'jsdoc']);

todoList.addItem(newTodo);
todoList.addItem(nextTodo);

console.log(todoList.getAll());
console.log(todoList.getAll().length);
console.log(todoList.getItem("1"));
