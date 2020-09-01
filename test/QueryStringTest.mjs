//
// Tests taken from https://github.com/ljharb/qs/blob/master/test/parse.js

import * as QueryString from "../src/QueryString.mjs";

export {testDecodeSimpleStrings};
export {testDecodeMultipleEntries};


function testDecodeSimpleStrings() {
    testParse("0=foo", { 0: "foo" });
    testParse("foo=c++", { foo: "c  " });
    testParse("a[>=]=23", { a: { ">=": "23" } });
    testParse("a[<=>]==23", { a: { "<=>": "=23" } });
    testParse("a[==]=23", { a: { "==": "23" } });
    testParse("foo", { foo: null });
    testParse("foo=", { foo: "" });
    testParse("foo=bar", { foo: "bar" });
    testParse(" foo = bar = baz ", { " foo ": " bar = baz " });
    testParse("foo=bar=baz", { foo: "bar=baz" });
    testParse("foo=bar&bar=baz", { foo: "bar", bar: "baz" });
    testParse("foo2=bar2&baz2=", { foo2: "bar2", baz2: "" });
    testParse("foo=bar&baz", { foo: "bar", baz: null });
    testParse("foo=bar&baz", { foo: "bar", baz: null });
    testParse("cht=p3&chd=t:60,40&chs=250x100&chl=Hello|World", {
        cht: "p3",
        chd: "t:60,40",
        chs: "250x100",
        chl: "Hello|World"
    });
}

function testDecodeMultipleEntries() {
    // testParse("a=1&a=2", {
    //     a: ["1", "2"],
    // });
    testParse("a=abc&a=abc", {
        a: ["abc", "abc"],
    });
}


// Internals

function testParse(str, expected) {
    const actual = QueryString.decode(str);

    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(`Expected "${JSON.stringify(expected, null, 4)}" got "${JSON.stringify(actual, null, 4)}"`);
    }
}
