# nodes-each

[![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)

Loop through nodelist / the result of querySelectorAll.

## Usage

[![NPM](https://nodei.co/npm/nodes-each.png)](https://www.npmjs.com/package/nodes-each)

## nodesEach (array, callback[, scope])

```js
var nodesEach = require('nodes-each');
var nodes = document.querySelectorAll('.someSelector')

nodesEach(nodes, function (i, val) {
      console.log('index: 'i, 'value': val);
   });
```

## License

MIT, see [LICENSE.md](http://github.com/stbaer/nodes-each/blob/master/LICENSE.md) for details.
