import { EventEmitter } from "events";

class TodoStore extends EventEmitter {
	constructor() {
		super();
		this.todos = [
			{
				id: 113464613,
				text: "Go Shopping",
				complete: false
			},
			{
				id: 113464614,
				text: "Pay Bills",
				complete: false
			}
		];
	}

	getAll() {
	return this.todos;
	}
}

const todoStore = new TodoStore();

export default todoStore;