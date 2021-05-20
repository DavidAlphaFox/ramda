// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function _objectIs(a, b) {
  // SameValue algorithm
  // 先判断是否相同的值
  if (a === b) { // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // 判断是否是数字，非0的数字需要进行1除
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // 如果是NaN的话 NaN自己就无法和自己相等
    // 如果是两个NaN，那么就代表a不等于自身，b也不等于自身
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
}
//如果JS已经提供了is，那么直接使用提供的函数
export default typeof Object.is === 'function' ? Object.is : _objectIs;
