/**
 *
 * foreach that can be used with the result of querySelectorAll
 * @example
 *  nodesEach(myNodeList, function (i, val) {
 *      console.log('index: 'i, 'value': val);
 *   });
 *
 * @param array
 * @param {callback} cb
 * @param [scope]
 */
var nodesEach = function(array, cb, scope){
  var i = 0;
  var n = array.length;

  for (i; i < n; i++) {
      cb.call(scope, i, array[i]);
  }
};
