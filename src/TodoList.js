import Todo from './Todo.js';
export default class TodoList {
    /**
     * Todo List를 만든다.
     */
    constructor() {
        this._nextTodoId = 1;
        this._todos = [];
    }

    /**
     * TodoList에 Todo를 추가한다.
     * @func
     * @param { string } content - Todo의 내용 (내용이 무조건 있어야 한다)
     * @param { string } category - Todo의 카테고리
     * @param { string[] } [tags] - Todo의 태그들 (optional)
     */
    addTodo(content, category, tags) {
        const newTodo = new Todo(this._nextTodoId, content, category, tags);
        this._todos.push(newTodo);
        this._nextTodoId++;
    }

    /**
     * TodoList에서 해당 id를 가진 Todo를 조회한다.
     * @func
     * @param { string } id - 조회하려는 Todo의 아이디
     * @return { Todo } 해당 id의 Todo
     */
    getTodo(id) {
        return this._todos.filter((todo) => todo.id === id);
    }

    /**
     * TodoList의 모든 Todo를 조회한다.
     * @func
     * @return { Todo[] } 모든 Todo 배열
     */
    getAllTodos() {
        return this._todos;
    }

    /**
     * TodoList에서 해당 id를 가진 Todo를 삭제한다.
     * @func
     * @param { string } id - 삭제하려는 Todo의 아이디
     */
    deleteTodo(id) {
        const targetTodoIndex = this._todos.indexOf(
            this._todos.filter((todo) => todo.id === id)
        );
        this._todos.splice(targetTodoIndex, 1);
    }

    /**
     * TodoList의 모든 Todo를 삭제한다.
     * @func
     */
    deleteAllTodos() {
        this._todos = [];
    }
}
