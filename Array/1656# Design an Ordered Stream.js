/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this._data = Array(n + 1).fill(null);
  this._ptr = 0;
};

/**
 * @param {number} id
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (id, value) {
  const pos = id - 1;
  this._data[pos] = value;

  const oldPtr = this._ptr;
  const nextPtr = this._data.indexOf(null, oldPtr);

  this._ptr = nextPtr;
  return this._data.slice(oldPtr, this._ptr);
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 */
