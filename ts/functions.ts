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

/**
 * 强制类型校验
 * @param obj
 * @param key
 * @returns
 */
function mandatoryTypeCheck<T extends object, K extends keyof T>(
  obj: T,
  key: K
): T[K] {
  return obj[key];
}
const obj = {
  a: 1,
  hello: "world",
};
console.log(mandatoryTypeCheck(obj, "a"));

/**
 * 检查属性是否在对象中
 * @param obj
 * @param key
 * @returns
 */
function hasKey<O extends Record<string, any>>(
  obj: O,
  key: keyof any
): key is keyof O {
  return obj.hasOwnProperty(key);
}
