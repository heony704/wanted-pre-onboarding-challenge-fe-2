class Todo {
    /**
     * 새로운 Todo를 만든다.
     * @param { string } id - Todo의 아이디
     * @param { string } content - Todo의 내용 (내용이 무조건 있어야 한다)
     * @param { string } category - Todo의 카테고리
     * @param { string[] } [tags] - Todo의 태그들 (optional)
     */
    constructor(id, content, category, tags) {}

    /**
     * Todo의 아이디를 조회한다.
     * @func
     * @return { string } Todo의 아이디
     */
    get id() {}

    /**
     * Todo의 내용을 조회한다.
     * @func
     * @return { string } Todo의 내용
     */
    get content() {}

    /**
     * Todo의 카테고리를 조회한다.
     * @func
     * @return { string } Todo의 카테고리
     */
    get category() {}

    /**
     * Todo의 태그들을 조회한다.
     * @func
     * @return { string[] } Todo의 태그들
     */
    get tags() {}

    /**
     * Todo의 완료여부를 조회한다.
     * @func
     * @return { bool } Todo의 완료여부
     */
    get isDone() {}

    /**
     * Todo를 완료상태로 만든다.
     * @func
     */
    complete() {}

    /**
     * Todo를 미완료상태로 만든다.
     * @func
     */
    incomplete() {}

    /**
     * Todo의 내용을 수정한다.
     * @func
     * @param { string } newContent - 새로운 내용
     */
    #editContent(newContent) {}

    /**
     * Todo의 카테고리를 수정한다.
     * @func
     * @param { string } newCategory - 새로운 카테고리
     */
    #editCategory(newCategory) {}

    /**
     * Todo의 특정 태그를 수정한다.
     * @func
     * @param { string } targetTag - 수정하려고 하는 태그 이름
     * @param { string } newTag - 새로운 태그 이름
     */
    #editTag(targetTag, newTag) {}

    /**
     * Todo의 특정 태그를 삭제한다.
     * @func
     * @param { string } targetTag - 삭제하려는 태그 이름
     */
    #deleteTag(targetTag) {}

    /**
     * Todo의 모든 태그를 삭제한다.
     * @func
     */
    #deleteAllTags() {}

    /**
     * Todo를 주어진 내용에 따라 수정한다.
     * @func
     * @param { string } id - 수정하려는 Todo의 아이디
     * @param { Object } newTodo - 수정할 부분만 합쳐서 객체로 받음
     * @param { string } newTodo.content - 수정할 내용
     * @param { string } newTodo.category - 수정할 카테고리
     * @param { string[] } newTodo.tags - 수정할 태그들
     */
    edit(id, newTodo) {}
}

class TodoList {
    /**
     * Todo List를 만든다.
     */
    constructor() {}

    /**
     * TodoList에 Todo를 추가한다.
     * @func
     * @param { string } content - Todo의 내용 (내용이 무조건 있어야 한다)
     * @param { string } category - Todo의 카테고리
     * @param { string[] } [tags] - Todo의 태그들 (optional)
     */
    addTodo(content, category, tags) {}

    /**
     * TodoList에서 해당 id를 가진 Todo를 조회한다.
     * @func
     * @param { string } id - 조회하려는 Todo의 아이디
     * @return { Todo } 해당 id의 Todo
     */
    getTodo(id) {}

    /**
     * TodoList의 모든 Todo를 조회한다.
     * @func
     * @return { Todo[] } 모든 Todo 배열
     */
    getAllTodos() {}

    /**
     * TodoList에서 해당 id를 가진 Todo를 삭제한다.
     * @func
     * @param { string } id - 삭제하려는 Todo의 아이디
     */
    deleteTodo(id) {}

    /**
     * TodoList의 모든 Todo를 삭제한다.
     * @func
     */
    deleteAllTodos() {}
}
