import Todo from './Todo';

export default class TodoList {
    _nextTodoId: number;
    _todos: Todo[];

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
        for (let i=0; i<this._todos.length; i++) {
            if (this._todos[i]._id === id) return this._todos[i];
        }
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
        let targetTodoIndex = -1;
        for (let i=0; i<this._todos.length; i++) {
            if (this._todos[i]._id === id) targetTodoIndex = i;
        }

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