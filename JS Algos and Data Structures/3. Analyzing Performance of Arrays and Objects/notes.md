# Big O and Built in Methods

## Objects

when you dont need any ordering

```js
let instructor = {
	firstName: 'Kelly',
	isInstrictor: true,
	favNumbers: [1, 2, 3, 4],
};
```

### When to use

- don't need order
- do need fast access, insertion, and removal

### Big O

- insertion = O(1)
- removal = O(1)
- searching = O(n)
- access = O(1)

### Methods

Object.keys = O(n)
Object.values = O(n)
Object.entries = O(n)
hasOwnProperty = O(1)

## Arrays

these are ordered lists

```js
let names = ['Myles', 'Mark', 'James'];
```

### When to use

- when you need order
- when you need fast access, insertion, and removal

### Big O

- insertion = depends
- removal = depends
- searching = O(n)
- access = O(1)
