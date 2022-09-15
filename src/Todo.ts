type Tags = string[];

export default class Todo {
    #id: number;
    #content: string;
    #isDone: boolean;
    #category: string;
    #tags: Tags;

    constructor(id: number, content: string, category: string, tags: Tags = []) {
        this.#id = id;
        this.#content = content;
        this.#isDone = false;
        this.#category = category;
        this.#tags = tags;
    }

    get id() {
        return this.#id;
    }

    get content() {
        return this.#content;
    }

    get category() {
        return this.#category;
    }

    get tags() {
        return this.#tags;
    }

    get isDone() {
        return this.#isDone;
    }

    complete() {
        this.#isDone = true;
    }

    incomplete() {
        this.#isDone = false;
    }

    #editContent(newContent: string) {
        this.#content = newContent;
    }

    #editCategory(newCategory: string) {
        this.#category = newCategory;
    }

    #editTag(targetTag, newTag) {
        const targetTagIndex = this.#tags.indexOf(targetTag);
        this.#tags[targetTagIndex] = newTag;
    }

    #deleteTag(targetTag) {
        const targetTagIndex = this.#tags.indexOf(targetTag);
        this.#tags.splice(targetTagIndex, 1);
    }

    #deleteAllTags() {
        this.#tags = [];
    }

    edit(newTodo) {
        if (newTodo.content) this.#editContent(newTodo.content);
        if (newTodo.category) this.#editCategory(newTodo.category);
        if (newTodo.tags) this.#tags = this.#tags;
    }
}
