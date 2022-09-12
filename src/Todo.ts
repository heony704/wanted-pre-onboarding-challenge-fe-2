export default class Todo {
    #id: number;
    #content: string;
    #isDone: boolean;
    #category: string;
    #tags: string[];

    /**
     * 새로운 Todo를 만든다.
     * @param { number } id - Todo의 아이디
     * @param { string } content - Todo의 내용 (내용이 무조건 있어야 한다)
     * @param { string } category - Todo의 카테고리
     * @param { string[] } [tags] - Todo의 태그들 (optional)
     */
    constructor(id, content, category, tags = []) {
        this.#id = id;
        this.#content = content;
        this.#isDone = false;
        this.#category = category;
        this.#tags = tags;
    }

    /**
     * Todo의 아이디를 조회한다.
     * @func
     * @return { number } Todo의 아이디
     */
    get id() {
        return this.#id;
    }

    /**
     * Todo의 내용을 조회한다.
     * @func
     * @return { string } Todo의 내용
     */
    get content() {
        return this.#content;
    }

    /**
     * Todo의 카테고리를 조회한다.
     * @func
     * @return { string } Todo의 카테고리
     */
    get category() {
        return this.#category;
    }

    /**
     * Todo의 태그들을 조회한다.
     * @func
     * @return { string[] } Todo의 태그들
     */
    get tags() {
        return this.#tags;
    }

    /**
     * Todo의 완료여부를 조회한다.
     * @func
     * @return { bool } Todo의 완료여부
     */
    get isDone() {
        return this.#isDone;
    }

    /**
     * Todo를 완료상태로 만든다.
     * @func
     */
    complete() {
        this.#isDone = true;
    }

    /**
     * Todo를 미완료상태로 만든다.
     * @func
     */
    incomplete() {
        this.#isDone = false;
    }

    /**
     * Todo의 내용을 수정한다.
     * @func
     * @param { string } newContent - 새로운 내용
     */
    #editContent(newContent) {
        this.#content = newContent;
    }

    /**
     * Todo의 카테고리를 수정한다.
     * @func
     * @param { string } newCategory - 새로운 카테고리
     */
    #editCategory(newCategory) {
        this.#category = newCategory;
    }

    /**
     * Todo의 특정 태그를 수정한다.
     * @func
     * @param { string } targetTag - 수정하려고 하는 태그 이름
     * @param { string } newTag - 새로운 태그 이름
     */
    #editTag(targetTag, newTag) {
        const targetTagIndex = this.#tags.indexOf(targetTag);
        this.#tags[targetTagIndex] = newTag;
    }

    /**
     * Todo의 특정 태그를 삭제한다.
     * @func
     * @param { string } targetTag - 삭제하려는 태그 이름
     */
    #deleteTag(targetTag) {
        const targetTagIndex = this.#tags.indexOf(targetTag);
        this.#tags.splice(targetTagIndex, 1);
    }

    /**
     * Todo의 모든 태그를 삭제한다.
     * @func
     */
    #deleteAllTags() {
        this.#tags = [];
    }

    /**
     * Todo를 주어진 내용에 따라 수정한다.
     * @func
     * @param { Object } newTodo - 수정할 부분만 합쳐서 객체로 받음
     * @param { string } newTodo.content - 수정할 내용
     * @param { string } newTodo.category - 수정할 카테고리
     * @param { string[] } newTodo.tags - 수정할 태그들
     */
    edit(newTodo) {
        if (newTodo.content) this.#editContent(newTodo.content);
        if (newTodo.category) this.#editCategory(newTodo.category);
        if (newTodo.tags) this.#tags = this.#tags;
    }
}
