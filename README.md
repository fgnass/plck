[![Build Status](https://travis-ci.org/fgnass/plck.svg?branch=master)](https://travis-ci.org/fgnass/plck)

### Tiny utility to extract a property from a list of objects

Example:

```js
var pluck = require('plck');

var list = [
  { foo: 23, bar: 'bar' },
  { foo: 42, bar: 'baz' }
];

console.log(pluck('foo', list));
```

Output:

```js
[ 23, 42 ]

```

The second argument can be any _array-like_ object. In case something else is
passed an empty array is returned (which is the default behavior of
`Array.prototype.map` when it is called with something that does not quack like
an array).

This is the actual implementation:

```js
module.exports = function plck(prop, list) {
  if (!list) return [];
  return Array.prototype.map.call(list, function(obj) {
    return obj[prop];
  });
};
```

### About

This package has been written to accompany utilities like
[flatten](https://npmjs.org/package/flatten) as alternative to full-blown
libraries like underscore or lodash.

Silly package name mnemonic: Think of _pluck_ with all vowels being plucked.

### License
MIT
