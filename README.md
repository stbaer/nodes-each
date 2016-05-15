# nodes-each

> Loop through a NodeList (e.g. the result of querySelectorAll).

## Install

`npm i --save nodes-each`

## nodesEach (NodeList, callback[, scope])

```
var nodesEach = require('nodes-each');

nodesEach( document.querySelectorAll('.someSelector'), function (idx, el) {
      console.log('index: ' + idx, 'element: ' + el);
   }, this);
```

## License

MIT, see [LICENSE.md](http://github.com/stbaer/nodes-each/blob/master/LICENSE.md) for details.
