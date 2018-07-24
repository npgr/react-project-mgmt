export const isDate = value => Object.prototype.toString.call(value) === '[object Date]';

export const isString = value => typeof value === 'string';
