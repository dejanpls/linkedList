export default class Node {
  #value;
  #next;

  constructor(value, next = null) {
    this.#value = value;
    this.#next = next;
  }

  get value() {
    return this.#value;
  }

  get next() {
    return this.#next;
  }
}
