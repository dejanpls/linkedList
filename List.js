import Node from "./Node.js";

export default class List {
  head = null;

  append(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      return;
    }

    let current = this.head;

    while (current.next !== null) current = current.next;
    current.next = node;
  }
}
