import * as Assert from "../src/Assert.mjs";
import * as Str from "../src/Str.mjs";

export {testMatchp};

function testMatchp() {
    Assert.deepEqual(Str.matchp("pre{in{nest}}post", "{", "}"), {
        start: 3,
        end: 12,
        pre: "pre",
        body: "in{nest}",
        post: "post"
     });
     Assert.deepEqual(Str.matchp("{{{{{{{{{in}post", "{", "}"), {
        start: 8,
        end: 11,
        pre: "{{{{{{{{",
        body: "in",
        post: "post"
     });
     Assert.deepEqual(Str.matchp("pre{body{in}post", "{", "}"), {
        start: 8,
        end: 11,
        pre: "pre{body",
        body: "in",
        post: "post"
     });
     Assert.deepEqual(Str.matchp("pre{in}po}st", "{", "}"), {
        start: 3,
        end: 6,
        pre: "pre",
        body: "in",
        post: "po}st"
     });
     Assert.deepEqual(Str.matchp("pre}{in{nest}}post", "{", "}"), {
        start: 4,
        end: 13,
        pre: "pre}",
        body: "in{nest}",
        post: "post"
     });
     Assert.deepEqual(Str.matchp("pre{body}between{body2}post", "{", "}"), {
        start: 3,
        end: 8,
        pre: "pre",
        body: "body",
        post: "between{body2}post"
     });
     Assert.equal(Str.matchp("nope", "{", "}"), null, "should be notOk");
     Assert.deepEqual(Str.matchp("pre<b>in<b>nest</b></b>post", "<b>", "</b>"), {
         start: 3,
         end: 19,
         pre: "pre",
         body: "in<b>nest</b>",
         post: "post"
     });
     Assert.deepEqual(Str.matchp("pre</b><b>in<b>nest</b></b>post", "<b>", "</b>"), {
         start: 7,
         end: 23,
         pre: "pre</b>",
         body: "in<b>nest</b>",
         post: "post"
     });
     Assert.deepEqual(Str.matchp("pre{{{in}}}post", "{{", "}}"), {
         start: 3,
         end: 9,
         pre: "pre",
         body: "{in}",
         post: "post"
     });
     Assert.deepEqual(Str.matchp("pre{{{in}}}post", "{{{", "}}"), {
         start: 3,
         end: 8,
         pre: "pre",
         body: "in",
         post: "}post"
     });
     Assert.deepEqual(Str.matchp("pre{{first}in{second}post", "{", "}"), {
         start: 4,
         end: 10,
         pre: "pre{",
         body: "first",
         post: "in{second}post"
     });
     Assert.deepEqual(Str.matchp("pre<?>post", "<?", "?>"), {
         start: 3,
         end: 4,
         pre: "pre",
         body: "",
         post: "post"
     });
     Assert.equal(Str.matchp( "nope", "{", "}"), null, "should be notOk");
     Assert.equal(Str.matchp("{nope", "{", "}"), null, "should be notOk");
     Assert.equal(Str.matchp("{", "}", "nope}"), null, "should be notOk");
     Assert.equal(Str.matchp("nope", /\{/, /\}/), null, "should be notOk");
     Assert.deepEqual(Str.matchp("pre  {   in{nest}   }  post", /\s+\{\s+/, /\s+\}\s+/), {
         start: 3,
         end: 17,
         pre: "pre",
         body: "in{nest}",
         post: "post"
     });
 }
