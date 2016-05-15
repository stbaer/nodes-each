# nodes-each

> Loop through a NodeList

Loop through a NodeList (e.g. the result of querySelectorAll).

## nodesEach (array, callback[, scope])

```
var nodesEach = require('nodes-each');
var nodes = document.querySelectorAll('.someSelector')

nodesEach(nodes, function (i, element) {
      console.log('index: 'i, 'value': element);
   }, this);
```

## License

MIT, see [LICENSE.md](http://github.com/stbaer/nodes-each/blob/master/LICENSE.md) for details.
