# 📚 Linked List Implementation (JavaScript)

> Built as part of The Odin Project JavaScript curriculum.

A **Linked List** is a linear data structure consisting of **nodes**, where each node contains a value and a reference (or pointer) to the next node in the sequence.

Unlike arrays, linked lists don’t store elements in contiguous memory locations, making them great for dynamic data management — especially when frequent insertions or deletions are involved.

---

## 📌 Structure of a Linked List

Each node has:

- A `value`: The actual data.
- A `next` pointer: A reference to the next node (or `null` if it’s the end).

### Visual Representation:

```
[ NODE (head) ] -> [ NODE ] -> [ NODE (tail) ] -> null
```

---

## 🛠️ Available Methods

Here’s a list of methods available on the `LinkedList` class:

### 🔹 Core Features

- **append(value)**
  Adds a node with the given value to the **end** of the list.

- **prepend(value)**
  Adds a node with the given value to the **start** of the list.

- **size**
  Returns the **number of nodes** in the list.

- **head**
  Returns the **first node** in the list.

- **tail**
  Returns the **last node** in the list.

- **at(index)**
  Returns the **node at the specified index** (0-based). Returns `null` if out of bounds.

- **pop()**
  Removes the **last node** from the list.

- **contains(value)**
  Returns `true` if the list contains the given value, otherwise `false`.

- **find(value)**
  Returns the **index** of the node containing the value, or `null` if not found.

- **toString**
  Converts the list into a readable string format:

  ```
  ( value ) -> ( value ) -> ( value ) -> null
  ```

---

## ⭐ Extra Credit Features

- **insertAt(value, index)**
  Inserts a new node with the given value **at the specified index**.

- **removeAt(index)**
  Removes the node at the specified index.

---

## 🧠 Why Use Linked Lists?

- Efficient insertions/removals (especially at the beginning/middle)
- No need to preallocate space
- Great for implementing stacks, queues, and complex graph-based data structures

---

## 📎 Notes

- All methods assume zero-based indexing.
- Edge cases (like empty lists, invalid indices, etc.) are handled gracefully.

---
