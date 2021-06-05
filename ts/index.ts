/**
 * 参数元组化
 * @param elements
 * @returns
 */
function tuplify<T extends unknown[]>(...elements: T): T {
  return elements;
}

// const temp: [string, number]
const temp = tuplify("Sam", 32);
