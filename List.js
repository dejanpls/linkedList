import Node from "./Node.js";

export default class List {
  #head = null;

  append(value) {
    const node = new Node(value);

    if (this.#head === null) {
      this.#head = node;
      return;
    }

    let current = this.#head;

    while (current.next !== null) current = current.next;
    current.next = node;
  }

  prepend(value) {
    const node = new Node(value);

    node.next = this.#head;
    this.#head = node;
  }

  get size() {
    if (this.#head === null) return 0;

    let size = 1;
    let current = this.#head;
    while (current.next !== null) {
      current = current.next;
      size++;
    }
    return size;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    if (this.#head === null) return this.#head;

    let tail = this.#head;
    while (tail.next !== null) tail = tail.next;
    return tail;
  }

  at(index) {
    if (this.#head === null) return this.#head;

    let count = 0;
    let current = this.#head;

    while (current !== null && count !== index) {
      current = current.next;
      count++;
    }

    return current;
  }
}
