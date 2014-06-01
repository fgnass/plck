var plck = require('./');
var util = require('util');
var assert = require('assert');

[
  [ 'foo', [{ foo: 23, bar: 'bar'}, { foo: 42 }], [23, 42] ],
  [ 'foo', [], [] ],
  [ 'foo', undefined, [] ],
  [ 'foo', { foo: 23 }, [] ],
  [ 'foo', [1, 2], [undefined, undefined] ]
]
.forEach(function(t) {
  assert.deepEqual(plck(t[0], t[1]), t[2],
    util.format('✘  plck(%j, %j) !== %j', t[0], t[1], t[2])
  );
  console.log('✔  plck(%j, %j) == %j', t[0], t[1], t[2]);
});
