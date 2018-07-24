import { isDate, isString } from './types';

function reviver(key, value) {
    return value;
}

function replacer(key, value) {
    if (isDate(this[key])) {
        return this[key].getTime();
    }
    if (isString(value)) {
        return value || null;
    }
    return value;
}

export const parse = json => JSON.parse(json, reviver);
export const stringify = value => JSON.stringify(value, replacer);
