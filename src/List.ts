interface Idable {
    id: string;
}

export default class List<Type extends Idable> {
    #list: Type[];

    constructor() {
        this.#list = [];
    }

    addItem(newItem: Type) {
        this.#list.push(newItem);
    }

    getItem(id: string): Type {
        for (let i=0; i<this.#list.length; i++) {
            if (this.#list[i].id === id) return this.#list[i];
        }
    }

    getAll(): Type[] {
        return this.#list;
    }

    deleteItem(id: string) {
        let targetTodoIndex = -1;
        for (let i=0; i<this.#list.length; i++) {
            if (this.#list[i].id === id) targetTodoIndex = i;
        }

        this.#list.splice(targetTodoIndex, 1);
    }

    deleteAll() {
        this.#list = [];
    }
}