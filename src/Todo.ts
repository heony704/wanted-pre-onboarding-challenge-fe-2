export default class Todo {
    _id: number;
    _content: string;
    _isDone: boolean;
    _category: string;
    _tags: string[];

    /**
     * 새로운 Todo를 만든다.
     * @param { number } id - Todo의 아이디
     * @param { string } content - Todo의 내용 (내용이 무조건 있어야 한다)
     * @param { string } category - Todo의 카테고리
     * @param { string[] } [tags] - Todo의 태그들 (optional)
     */
    constructor(id, content, category, tags = []) {
        this._id = id;
        this._content = content;
        this._isDone = false;
        this._category = category;
        this._tags = tags;
    }

    /**
     * Todo의 아이디를 조회한다.
     * @func
     * @return { number } Todo의 아이디
     */
    get id() {
        return this._id;
    }

    /**
     * Todo의 내용을 조회한다.
     * @func
     * @return { string } Todo의 내용
     */
    get content() {
        return this._content;
    }

    /**
     * Todo의 카테고리를 조회한다.
     * @func
     * @return { string } Todo의 카테고리
     */
    get category() {
        return this._category;
    }

    /**
     * Todo의 태그들을 조회한다.
     * @func
     * @return { string[] } Todo의 태그들
     */
    get tags() {
        return this._tags;
    }

    /**
     * Todo의 완료여부를 조회한다.
     * @func
     * @return { bool } Todo의 완료여부
     */
    get isDone() {
        return this._isDone;
    }

    /**
     * Todo를 완료상태로 만든다.
     * @func
     */
    complete() {
        this._isDone = true;
    }

    /**
     * Todo를 미완료상태로 만든다.
     * @func
     */
    incomplete() {
        this._isDone = false;
    }

    /**
     * Todo의 내용을 수정한다.
     * @func
     * @param { string } newContent - 새로운 내용
     */
    #editContent(newContent) {
        this._content = newContent;
    }

    /**
     * Todo의 카테고리를 수정한다.
     * @func
     * @param { string } newCategory - 새로운 카테고리
     */
    #editCategory(newCategory) {
        this._category = newCategory;
    }

    /**
     * Todo의 특정 태그를 수정한다.
     * @func
     * @param { string } targetTag - 수정하려고 하는 태그 이름
     * @param { string } newTag - 새로운 태그 이름
     */
    #editTag(targetTag, newTag) {
        const targetTagIndex = this._tags.indexOf(targetTag);
        this._tags[targetTagIndex] = newTag;
    }

    /**
     * Todo의 특정 태그를 삭제한다.
     * @func
     * @param { string } targetTag - 삭제하려는 태그 이름
     */
    #deleteTag(targetTag) {
        const targetTagIndex = this._tags.indexOf(targetTag);
        this._tags.splice(targetTagIndex, 1);
    }

    /**
     * Todo의 모든 태그를 삭제한다.
     * @func
     */
    #deleteAllTags() {
        this._tags = [];
    }

    /**
     * Todo를 주어진 내용에 따라 수정한다.
     * @func
     * @param { string } id - 수정하려는 Todo의 아이디
     * @param { Object } newTodo - 수정할 부분만 합쳐서 객체로 받음
     * @param { string } newTodo.content - 수정할 내용
     * @param { string } newTodo.category - 수정할 카테고리
     * @param { string[] } newTodo.tags - 수정할 태그들
     */
    edit(newTodo) {
        if (newTodo.content) this.#editContent(newTodo.content);
        if (newTodo.category) this.#editCategory(newTodo.category);
        if (newTodo.tags) this._tags = this._tags;
    }
}
