import Todo from './Todo';

export default class TodoList {
    #nextTodoId: number;
    #todos: Todo[];

    constructor() {
        this.#nextTodoId = 1;
        this.#todos = [];
    }

    addTodo(content, category, tags) {
        const newTodo = new Todo(this.#nextTodoId, content, category, tags);
        this.#todos.push(newTodo);
        this.#nextTodoId++;
    }

    getTodo(id) {
        for (let i=0; i<this.#todos.length; i++) {
            if (this.#todos[i].id === id) return this.#todos[i];
        }
    }

    getAllTodos() {
        return this.#todos;
    }

    deleteTodo(id) {
        let targetTodoIndex = -1;
        for (let i=0; i<this.#todos.length; i++) {
            if (this.#todos[i].id === id) targetTodoIndex = i;
        }

        this.#todos.splice(targetTodoIndex, 1);
    }

    deleteAllTodos() {
        this.#todos = [];
    }
}
