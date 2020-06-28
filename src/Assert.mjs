//! Set of assertion test functions

// based on node assert, original notice:
// NB: The URL to the CommonJS spec is kept just for tradition.
//     node-assert has evolved a lot since then, both in API and behavior.

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
import * as List from "./List.mjs";
import * as Str from "./Str.mjs";

export {fail};
export {ok};
export {equal};
export {notEqual};
export {deepEqual};
export {notDeepEqual};
export {notDeepStrictEqual};
export {strictEqual};
export {notStrictEqual};
export {fails};
export {doesNotThrow};
export {ifError};

const functionsHaveNames = ok.name === "ok";
const functionRe = /\s*function\s+([^\(\s]*)\s*/;

export class AssertionError extends Error {
    constructor(options) {
        super();
        this.name = "AssertionError";
        this.actual = options.actual;
        this.expected = options.expected;
        this.operator = options.operator;

        if (options.message) {
            this.message = options.message;
            this.generatedMessage = false;
        } else {
            this.message = getMessage(this);
            this.generatedMessage = true;
        }

        const stackStartFunction = options.stackStartFunction || fail;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, stackStartFunction);
        } else {
          // non v8 browsers so we can have a stacktrace
            const err = new Error();
            if (err.stack) {
                const out = err.stack;

                const fnname = getName(stackStartFunction);
                const idx = out.indexOf("\n" + fnname);

                if (idx >= 0) {
                    const nextline = out.indexOf("\n", idx + 1);
                    out = out.substring(nextline + 1);
                }

                this.stack = out;
            }
        }
    }
}

// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js

function fail(actual, expected, message, operator, stackStartFunction) {
    throw new AssertionError({
        message: message,
        actual: actual,
        expected: expected,
        operator: operator,
        stackStartFunction: stackStartFunction
    });
}

/// Pure assertion tests whether a value is truthy, as determined
/// by !!guard.
/// assert.ok(guard, message_opt);
/// This statement is equivalent to assert.equal(true, !!guard,
/// message_opt);. To test strictly for the value true, use
/// assert.strictEqual(true, guard, message_opt);.
function ok(value, message) {
    if (!value) {
        fail(value, true, message, "==", ok);
    }
}

/// The equality assertion tests shallow, coercive equality with ==.
/// assert.equal(actual, expected, message_opt);
function equal(actual, expected, message) {
    if (actual != expected) {
        fail(actual, expected, message, "==", equal);
    }
}

/// The non-equality assertion tests for whether two objects are not equal
/// with != assert.notEqual(actual, expected, message_opt);
function notEqual(actual, expected, message) {
    if (actual == expected) {
        fail(actual, expected, message, "!=", notEqual);
    }
}

/// The equivalence assertion tests a deep equality relation.
/// assert.deepEqual(actual, expected, message_opt);
function deepEqual(actual, expected, message) {
    if (!internalDeepEqual(actual, expected, false)) {
        fail(actual, expected, message, "deepEqual", deepEqual);
    }
}

function deepStrictEqual(actual, expected, message) {
    if (!internalDeepEqual(actual, expected, true)) {
        fail(actual, expected, message, "deepStrictEqual", deepStrictEqual);
    }
}

/// The non-equivalence assertion tests for any deep inequality.
/// assert.notDeepEqual(actual, expected, message_opt);
function notDeepEqual(actual, expected, message) {
    if (internalDeepEqual(actual, expected, false)) {
        fail(actual, expected, message, "notDeepEqual", notDeepEqual);
    }
}

function notDeepStrictEqual(actual, expected, message) {
    if (internalDeepEqual(actual, expected, true)) {
        fail(actual, expected, message, "notDeepStrictEqual", notDeepStrictEqual);
    }
}

/// The strict equality assertion tests strict equality, as determined by ===.
/// assert.strictEqual(actual, expected, message_opt);
function strictEqual(actual, expected, message) {
    if (actual !== expected) {
        fail(actual, expected, message, "===", strictEqual);
    }
}

/// The strict non-equality assertion tests for strict inequality, as
/// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);
function notStrictEqual(actual, expected, message) {
    if (actual === expected) {
        fail(actual, expected, message, "!==", notStrictEqual);
    }
}

/// Expected to throw an error:
/// assert.throws(block, Error_opt, message_opt);
function fails(block, error, message) {
    internalThrows(true, block, error, message);
}

function doesNotThrow(block, error, message) {
    internalThrows(false, block, error, message);
}

function ifError(err) {
    if (err) {
      throw err;
    }
}

// Internals

function getName(fn) {
    if (typeof fn !== "function") {
        return;
    }

    if (functionsHaveNames) {
        return fn.name;
    }

    const str = fn.toString();
    const match = str.match(functionRe);

    return match && match[1];
}

function inspect(obj) {
    //functionsHaveNames ||
    if (typeof obj !== "function") {
        if (obj === void(0)) {
            return "(undefined)";
        }

        if (obj === null) {
            return "(null)";
        }

        return JSON.stringify(obj);
    }

    const rawname = getName(obj);
    const name = rawname ? ": " + rawname : "";

    return "[Function" +  name + "]";
}

function getMessage(self) {
    return Str.truncate(inspect(self.actual), 128) + " "
         + self.operator + " "
         + Str.truncate(inspect(self.expected), 128);
}

function internalDeepEqual(actual, expected, strict, memos) {
    if (actual === expected) {
        return true;
    } else if (isDate(actual) && isDate(expected)) {
        return actual.getTime() === expected.getTime();
    } else if (isRegExp(actual) && isRegExp(expected)) {
        return actual.source === expected.source
            && actual.global === expected.global
            && actual.multiline === expected.multiline
            && actual.lastIndex === expected.lastIndex
            && actual.ignoreCase === expected.ignoreCase;
    } else if ((actual === null || typeof actual !== "object") &&
               (expected === null || typeof expected !== "object")) {
        return strict ? actual === expected : actual == expected;
    } else if (isView(actual) && isView(expected) &&
               Object.prototype.toString.call(actual) === Object.prototype.toString.call(expected) &&
               !(actual instanceof Float32Array ||
                 actual instanceof Float64Array)) {
        return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;
    }

    memos = memos || {actual: [], expected: []};

    const  actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
        if (actualIndex === memos.expected.indexOf(expected)) {
            return true;
        }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
}

function isDate(d) {
    return Object.prototype.toString.call(d) === "[object Date]";
}

function isRegExp(re) {
    return Object.prototype.toString.call(re) === "[object RegExp]";
}

function isPrimitive(arg) {
    return arg === null
        || typeof arg === "boolean"
        || typeof arg === "number"
        || typeof arg === "string"
        || typeof arg === "symbol"
        || typeof arg === "undefined";
}

function isView(arrbuf) {
    if (typeof ArrayBuffer !== "function") {
        return false;
    }

    if (typeof ArrayBuffer.isView === "function") {
        return ArrayBuffer.isView(arrbuf);
    }

    if (!arrbuf) {
        return false;
    }

    if (arrbuf instanceof DataView) {
        return true;
    }

    if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
        return true;
    }

    return false;
}

function isArguments(object) {
    return Object.prototype.toString.call(object) == "[object Arguments]";
}

function objEquiv(a, b, strict, actualVisitedObjects) {
    if (a === null || a === void(0) || b === null || b === void(0)) {
        return false;
    }

    if (isPrimitive(a) || isPrimitive(b)) {
        return a === b;
    }

    if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) {
        return false;
    }

    if ((isArguments(a) && !isArguments(b)) ||
        (!isArguments(a) && isArguments(b))) {
        return false;
    }

    if (isArguments(a)) {
        return internalDeepEqual(List.clone(a), List.clone(b), strict);
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
        return false;
    }

    keysA.sort();
    keysB.sort();

    for (let i = keysA.length - 1; i >= 0; i--) {
        if (keysA[i] !== keysB[i]) {
            return false;
        }
    }

    for (let i = keysA.length - 1; i >= 0; i--) {
        const key = keysA[i];

        if (!internalDeepEqual(a[key], b[key], strict, actualVisitedObjects)) {
            return false;
        }
    }

    return true;
}

function internalThrows(shouldThrow, block, expected, message) {
    if (typeof block !== "function") {
        throw new TypeError("'block' argument must be a function");
    }

    if (typeof expected === "string") {
        message = expected;
        expected = null;
     }

    const actual = tryBlock(block);

    message = (expected && expected.name ? " (" + expected.name + ")." : ".") +
              (message ? " " + message : ".");

    if (shouldThrow && !actual) {
        fail(actual, expected, "Missing expected exception" + message);
    }

    const userProvidedMessage = typeof message === "string";
    const isUnwantedException = !shouldThrow && actual instanceof Error;
    const isUnexpectedException = !shouldThrow && actual && !expected;

    if ((isUnwantedException &&
        userProvidedMessage &&
        expectedException(actual, expected)) ||
        isUnexpectedException) {
        fail(actual, expected, "Got unwanted exception" + message);
    }

    if ((shouldThrow && actual && expected &&
        !expectedException(actual, expected)) || (!shouldThrow && actual)) {
        throw actual;
    }
}

function expectedException(actual, expected) {
    if (!actual || !expected) {
        return false;
    }

    if (Object.prototype.toString.call(expected) == "[object RegExp]") {
        return expected.test(actual);
    }

    try {
        if (actual instanceof expected) {
            return true;
        }
    } catch (e) {
    }

    if (Error.isPrototypeOf(expected)) {
        return false;
    }

    return expected.call({}, actual) === true;
}

function tryBlock(block) {
    try {
        block();
    } catch (error) {
        return error;
    }
}

function compare(a, b) {
    if (a === b) {
        return 0;
    }

    let x = a.length;
    let y = b.length;

    for (let i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
           x = a[i];
           y = b[i];
           break;
        }
    }

    if (x < y) {
        return -1;
    }

    if (y < x) {
        return 1;
    }

    return 0;
}
