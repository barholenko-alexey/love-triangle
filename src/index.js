/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(arr = []) {
  arr.unshift(0);
  var cnt = 0; 
  var i = 1;
  for ( i; arr.length > i; i++ ) {
    f = arr[i]; s = arr[f]; t = arr[s];
    if (t === i) cnt++;
  }
  return Math.floor(cnt/3);
};
