/**
 * 判断类型
 * @param {*} checkType Number|Boolean|String|Function|Array|Object
 * @returns (obj) => boolean
 */
const typeCheck = (checkType) => (obj) => {
  return Object.prototype.toString.call(obj) === `[object ${checkType}]`;
};

const isString = typeCheck("String");
const isFunction = typeCheck("Function");
const isArray = typeCheck("Array");
const isObject = typeCheck("Object");
