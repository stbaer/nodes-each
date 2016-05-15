/**
 * nodesEach - loop through a NodeList
 *
 * @example
 *  nodesEach(myNodeList, function (idx, el) {
 *      console.log('index: ' + idx, 'element: ' + el);
 *   }, this);
 *
 * @param {NodeList} nodes - the NodeList
 * @param {callback} cb   -
 * @param {scope} [scope] - optional
 */
var nodesEach = function(nodes, cb, scope){

  for (var i = 0, n = nodes.length; i < n; i++) {
      cb.call(scope, i, nodes[i]);
  }

};

module.exports = nodesEach;
