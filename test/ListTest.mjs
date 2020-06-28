import * as Assert from "../src/Assert.mjs";
import * as List from "../src/List.mjs";

export {testAppend};
export {testAll};
export {testInit};
export {testMerge};
export {testRange};
export {testClone};
export {testHead};
export {testTail};
export {testLast};
export {testEach};
export {testFilter};
export {testFind};
export {testMap};
export {testSome};
export {testSlice};
export {testFoldl};
export {testFoldr};
export {testFlatten};
export {testUnion};
export {testContains};
export {testClean};
export {testReverse};
export {testLen};
export {testPrepend};
export {testSort};
export {testConcatMapEmptyOrNot};
export {testConcatMapAlwaysSomething};
export {testConcatMapScalars};
export {testConcatMapUndefs};

function testAppend() {
    Assert.deepEqual(List.append(["a"], "b"), ["a", "b"]);
}

function testAll() {
    Assert.equal(List.all(["a", "b", "c"], e => typeof e === "string"), true);
}

function testInit() {
    Assert.deepEqual(List.init(["a", "b", "c"]), ["a", "b"]);
    Assert.deepEqual(List.init(["a"]), []);
    Assert.deepEqual(List.init([]), []);
}

function testMerge() {
    Assert.deepEqual(List.merge(["a"], ["b"]), ["a", "b"]);
    Assert.deepEqual(List.merge(["a"], ["b"], ["c", "d"]), ["a", "b", "c", "d"]);
}

function testRange() {
    Assert.deepEqual(List.range(10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    Assert.deepEqual(List.range(1, 11), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    Assert.deepEqual(List.range(0, 30, 5), [0, 5, 10, 15, 20, 25]);
    Assert.deepEqual(List.range(0, 10, 3), [0, 3, 6, 9]);
    Assert.deepEqual(List.range(0, -10, -1), [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]);
    Assert.deepEqual(List.range(0), []);
    Assert.deepEqual(List.range(1, 0), []);
    Assert.deepEqual(List.map(List.range(2), no => `No ${no}`), ["No 0", "No 1"]);
}

function testClone() {
    Assert.deepEqual(List.clone(["a"]), ["a"]);
    Assert.deepEqual(List.clone(["a", "b"]), ["a", "b"]);
}

function testHead() {
    Assert.equal(List.head(["a"]), "a");
    Assert.deepEqual(List.head([{"a": 1}]), {"a": 1});
    Assert.equal(List.head([]), null);
}

function testTail() {
    Assert.deepEqual(List.tail(["a", "b", "c"]), ["b", "c"]);
    Assert.deepEqual(List.tail(["a"]), []);
    Assert.deepEqual(List.tail([]), []);
}

function testLast() {
    Assert.equal(List.last(["a", "b", "c"]), "c");
    Assert.equal(List.last(["a"]), "a");
    Assert.equal(List.last([]), null);
}

function testEach() {
    const numbers = [1, 2, 3, 4];
    List.each(numbers, (elem, idx, list) => {
        Assert.ok(typeof elem == "number");
        Assert.ok(typeof idx == "number");
        Assert.ok(numbers === list);
    });
}

function testFilter() {
    const numbers = [1, 2, 3, 4];
    const result = List.filter(numbers, (elem, idx, list) => {
        Assert.ok(typeof elem == "number");
        Assert.ok(typeof idx == "number");
        Assert.ok(numbers === list);
        return elem > 1;
    });
    Assert.deepEqual(result, [2, 3, 4]);
}

function testFind() {
    const numbers = [1, 2, 3, 4];
    const result = List.find(numbers, (elem, idx, list) => {
        Assert.ok(typeof elem == "number");
        Assert.ok(typeof idx == "number");
        Assert.ok(numbers === list);
        return elem === 1;
    });
    Assert.deepEqual(result, 1);
}

function testMap() {
    const numbers = [1, 2, 3, 4];
    const result = List.map(numbers, (elem, idx, list) => {
        Assert.ok(typeof elem == "number");
        Assert.ok(typeof idx == "number");
        Assert.ok(numbers === list);
        return elem + 1;
    });
    Assert.deepEqual(result, [2, 3, 4, 5]);
}

function testSome() {
    const numbers = [1, 2, 3, 4];
    const result = List.some(numbers, (elem, idx, list) => {
        Assert.ok(typeof elem == "number");
        Assert.ok(typeof idx == "number");
        Assert.ok(numbers === list);
        return elem === 4;
    });
    Assert.deepEqual(result, true);
}

function testSlice() {
    const numbers = [1, 2, 3, 4];
    Assert.deepEqual(List.slice(numbers, 1), [2, 3, 4]);
    Assert.deepEqual(List.slice(numbers, 1, 3), [2, 3]);
}

function testFoldl() {
    const numbers = [1, 2, 3, 4];
    const result = List.foldl(numbers, 0, (acc, elem) => {
        Assert.ok(typeof acc == "number");
        Assert.ok(typeof elem == "number");
        return acc + elem;
    });
    Assert.deepEqual(result, 10);
}

function testFoldr() {
    const numbers = [1, 2, 3, 4];
    const result = List.foldr(numbers, 0, (acc, elem) => {
        Assert.ok(typeof acc == "number");
        Assert.ok(typeof elem == "number");
        return acc + elem;
    });
    Assert.deepEqual(result, 10);
}

function testFlatten() {
    Assert.deepEqual(List.flatten([[1, 2], [3, 4]]), [1, 2, 3, 4]);
}

function testUnion() {
    Assert.deepEqual(List.union([1, 1, 2]), [1, 2]);
}

function testContains() {
    Assert.equal(List.contains([1, 2, 3], 3), true);
}

function testClean() {
    Assert.deepEqual(List.clean([void(0), void(0), 1]), [1]);
}

function testEmpty() {
    Assert.equal(List.empty([]), true);
    Assert.equal(List.empty([1]), false);
}

function testReverse() {
    Assert.deepEqual(List.reverse(["a", "b", "c"]), ["c", "b", "a"]);
    Assert.deepEqual(List.reverse([]), []);
}

function testLen() {
    Assert.equal(List.len(["a", "b", "c"]), 3);
    Assert.equal(List.len(["a"]), 1);
    Assert.equal(List.len([]), 0);
}

function testPrepend() {
    Assert.deepEqual(List.prepend(["a"], "b"), ["b", "a"]);
}

function testSort() {
    Assert.deepEqual(List.sort([5, 4, 3, 1, 2], (a, b) => a < b), [1, 2, 3, 4, 5]);
}

// Test taken from https://github.com/substack/node-concat-map/
function testConcatMapEmptyOrNot() {
    const xs = [ 1, 2, 3, 4, 5, 6 ];
    const ixes = [];

    const ys = List.concatMap(xs, (x, ix) => {
        ixes.push(ix);
        return x % 2 ? [ x - 0.1, x, x + 0.1 ] : [];
    });

    Assert.deepEqual(ys, [ 0.9, 1, 1.1, 2.9, 3, 3.1, 4.9, 5, 5.1 ]);
    Assert.deepEqual(ixes, [ 0, 1, 2, 3, 4, 5 ]);
}

// Test taken from https://github.com/substack/node-concat-map/
function testConcatMapAlwaysSomething() {
    const xs = [ "a", "b", "c", "d" ];
    const ys = List.concatMap(xs, x => {
        return x === "b" ? [ "B", "B", "B" ] : [ x ];
    });

    Assert.deepEqual(ys, [ "a", "B", "B", "B", "c", "d" ]);
}

// Test taken from https://github.com/substack/node-concat-map/
function testConcatMapScalars() {
    const xs = [ "a", "b", "c", "d" ];
    const ys = List.concatMap(xs, x => {
        return x === "b" ? [ "B", "B", "B" ] : x;
    });

    Assert.deepEqual(ys, [ "a", "B", "B", "B", "c", "d" ]);
}

// Test taken from https://github.com/substack/node-concat-map/
function testConcatMapUndefs() {
    const xs = [ "a", "b", "c", "d" ];
    const ys = List.concatMap(xs, x => {
        return x === "b" ? [ "B", "B", "B" ] : x;
    });

    Assert.deepEqual(ys, [ "a", "B", "B", "B", "c", "d" ]);
}
