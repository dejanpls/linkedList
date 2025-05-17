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

  pop() {
    let tail = this.tail;
    let current = this.#head;

    if (current === null) return null;
    if (current.next === null) {
      this.#head = null;
      return tail;
    }

    while (current.next !== null && current.next !== tail) {
      current = current.next;
    }

    current.next = null;

    return tail;
  }

  contains(value) {
    let current = this.#head;

    while (current !== null) {
      if (current.value.toLowerCase() === value.toLowerCase()) return true;
      current = current.next;
    }

    return false;
  }

  find(value) {
    let current = this.#head;
    let size = 0;

    while (current !== null) {
      if (current.value.toLowerCase() === value.toLowerCase()) return size;
      current = current.next;
      size++;
    }

    return null;
  }

  get toString() {
    let current = this.#head;
    let string = "";

    while (current !== null) {
      string += `( ${current.value} ) -> `;
      current = current.next;
    }

    return string + "null";
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) return null;

    if (index === 0) {
      this.prepend(value);
      return;
    }

    let previous = this.at(index - 1);
    if (this.#head === null || !previous) return null;

    let current = this.at(index);
    let node = new Node(value);

    node.next = current;
    previous.next = node;
  }
}
