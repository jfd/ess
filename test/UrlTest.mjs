import * as Assert from "../src/Assert.mjs";
import * as Url from "../src/Url.mjs";

export {testBasedonhttptracwebkitorgbrowsertrunkLayoutTestsfasturlscripttestssegmentsjs};
// export {testBasedonhttptracwebkitorgbrowsertrunkLayoutTestsfasturlfilehtml};
// export {testBasedonhttptracwebkitorgbrowsertrunkLayoutTestsfasturlscripttestspathjs};
// export {testBasedonhttptracwebkitorgbrowsertrunkLayoutTestsfasturlscripttestsrelativejs};
// export {testBasedonhttptracwebkitorgbrowsertrunkLayoutTestsfasturlsegmentsuserinfovshosthtml};
// export {testOthers};
// export {testBasiccanonicalizationuppercaseshouldbeconvertedtolowercase};
export {testU3000ismappedtoU0020spacewhichisdisallowed};
// export {testOthertypesofspacenobreakzerowidthzerowidthnobreakarenamepreppedawaytonothingU200BU2060andUFEFFareignored};
export {testIdeographicfullstopfullwidthperiodforChineseetcshouldbetreatedasadotU3002ismappedtoU002Edot};
export {testInvalidunicodecharactersshouldfailUFDD0isdisallowedefb790isUFDD0};
// export {testThisisthesameaspreviousbutescaped};
// export {testTestnamepreppingfullwidthinputshouldbeconvertedtoASCIIandNOTIDNizedThisisGoinfullwidthUTF8UTF16};
// export {testURLspecforbidsthefollowinghttpswwww3orgBugsPublicshowbugcgiid24257};
// export {test00infullwidthshouldfailalsoasescapedUTF8input};
export {testBasicIDNsupportUTF8andUTF16inputshouldbeconvertedtoIDN};
// export {testInvalidescapedcharactersshouldfailandthepercentsshouldbeescapedhttpswwww3orgBugsPublicshowbugcgiid24191};
// export {testIfwegetaninvalidcharacterthathasbeenescaped};
// export {testEscapednumbersshouldbetreatedlikeIPaddressesiftheyare};
// export {testInvalidescapingshouldtriggertheregularhosterrorhandling};
export {testSomethingthatisntexactlyanIPshouldgettreatedasahostandspacesescaped};
// export {testFullwidthandescapedUTF8fullwidthshouldstillbetreatedasIP};
export {testBrokenIPv6};
// export {testMiscUnicode};
// export {testresolvingafragmentagainstanyschemesucceeds};
// export {testmultipleinauthoritystate};
// export {testnonaz09characters};
// export {testCredentialsinbase};
// export {testasetoftestsdesignedbyzcorpanforrelativeURLswithunknownschemes};
// export {testmakesurethatrelativeURLlogicworksonknowntypicallynonrelativeschemestoo};
export {testunknownschemesandnonASCIIdomains};
// export {testunknownschemesandbackslashes};
export {testunknownschemewithpathlookinglikeapassword};
export {testtestsfromjsdomwhatwgurldesignedforcodecoverage};
// export {testtabLFCR};
export {testStringificationofURLsearchParams};
export {testSchemeonly};
// export {testPercentencodingoffragments};
// export {testIPv4parsingviahttpsgithubcomnodejsnodepull10317};
// export {testfileURLsrelativetootherfileURLsviahttpsgithubcomjsdomwhatwgurlpull60};
// export {testMorefileURLtestsbyzcorpan};
export {testIPv6trailingzerostest};

function testBasedonhttptracwebkitorgbrowsertrunkLayoutTestsfasturlscripttestssegmentsjs() {
    let url;

    // url = Url.parse("http://user:pass@foo:21/bar;par?b#c");
    // console.log(url);
    // url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http://[2001::1]");

    // url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "ftp:/example.com/");

    // url = Url.parse("file:/example.com/");
    // url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "file:/example.com/");

    // url = Url.parse("/a/ /c");
    // url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "/a/ /c");
    // url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "#β");

    // url = Url.parse("http:")
    // console.log(url);
    // throw new Error("j")

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http://example\t.\norg");
    Assert.equal(url.href, "http://example.org/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http://user:pass@foo:21/bar;par?b#c");
    Assert.equal(url.href, "http://user:pass@foo:21/bar;par?b#c");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, "user");
    Assert.equal(url.password, "pass");
    Assert.equal(url.hostname, "foo");
    Assert.equal(url.port, "21");
    Assert.equal(url.pathname, "/bar;par");
    Assert.equal(url.search, "?b");
    Assert.equal(url.hash, "#c");

    url = Url.resolve(Url.parse("about:blank", false), "https://test:@test");
    Assert.equal(url.href, "https://test@test/");
    Assert.equal(url.protocol, "https:");
    Assert.equal(url.username, "test");
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "test");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "https://:@test");
    Assert.equal(url.href, "https://test/");
    Assert.equal(url.protocol, "https:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "test");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", true), "non-special://test:@test/x");
    Assert.equal(url.href, "non-special://test@test/x");
    Assert.equal(url.protocol, "non-special:");
    Assert.equal(url.username, "test");
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "test");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/x");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", true), "non-special://:@test/x");
    Assert.equal(url.href, "non-special://test/x");
    Assert.equal(url.protocol, "non-special:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "test");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/x");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http:foo.com");
    Assert.equal(url.href, "http://example.org/foo/foo.com");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/foo.com");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "\t   :foo.com   \n");
    Assert.equal(url.href, "http://example.org/foo/:foo.com");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/:foo.com");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), " foo.com  ");
    Assert.equal(url.href, "http://example.org/foo/foo.com");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/foo.com");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "a:\t foo.com");
    Assert.equal(url.href, "a: foo.com");
    Assert.equal(url.protocol, "a:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, " foo.com");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http://f:21/ b ? d # e ");
    Assert.equal(url.href, "http://f:21/%20b%20?%20d%20# e");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "f");
    Assert.equal(url.port, "21");
    Assert.equal(url.pathname, "/%20b%20");
    Assert.equal(url.search, "?%20d%20");
    Assert.equal(url.hash, "# e");

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http://f:/c");
    Assert.equal(url.href, "http://f/c");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "f");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/c");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http://f:0/c");
    Assert.equal(url.href, "http://f:0/c");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "f");
    Assert.equal(url.port, "0");
    Assert.equal(url.pathname, "/c");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http://f:00000000000000/c");
    Assert.equal(url.href, "http://f:0/c");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "f");
    Assert.equal(url.port, "0");
    Assert.equal(url.pathname, "/c");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http://f:00000000000000000000080/c");
    Assert.equal(url.href, "http://f/c");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "f");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/c");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    Assert.fails(_ => Url.parse("http://f:b/c"));

    Assert.fails(_ => Url.parse("http://f: /c"));

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http://f:\n/c");
    Assert.equal(url.href, "http://f/c");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "f");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/c");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    Assert.fails(_ => Url.parse("http://f:fifty-two/c"));

    Assert.fails(_ => Url.parse("http://f:999999/c"));

    Assert.fails(_ => Url.parse("http://f: 21 / b ? d # e "));

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), null);
    Assert.equal(url.href, "http://example.org/foo/bar");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/bar");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "  \t");
    Assert.equal(url.href, "http://example.org/foo/bar");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/bar");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), ":foo.com/");
    Assert.equal(url.href, "http://example.org/foo/:foo.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/:foo.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), ":foo.com\\");
    Assert.equal(url.href, "http://example.org/foo/:foo.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/:foo.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), ":");
    Assert.equal(url.href, "http://example.org/foo/:");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/:");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), ":a");
    Assert.equal(url.href, "http://example.org/foo/:a");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/:a");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), ":/");
    Assert.equal(url.href, "http://example.org/foo/:/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/:/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), ":\\");
    Assert.equal(url.href, "http://example.org/foo/:/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/:/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), ":#");
    Assert.equal(url.href, "http://example.org/foo/:#");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/:");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "#");
    Assert.equal(url.href, "http://example.org/foo/bar#");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/bar");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "#/");
    Assert.equal(url.href, "http://example.org/foo/bar#/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/bar");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, "#/");

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "#\\");
    Assert.equal(url.href, "http://example.org/foo/bar#\\");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/bar");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, "#\\");

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "#;?");
    Assert.equal(url.href, "http://example.org/foo/bar#;?");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/bar");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, "#;?");

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "?");
    Assert.equal(url.href, "http://example.org/foo/bar?");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/bar");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "/");
    Assert.equal(url.href, "http://example.org/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), ":23");
    Assert.equal(url.href, "http://example.org/foo/:23");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/:23");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "/:23");
    Assert.equal(url.href, "http://example.org/:23");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/:23");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "::");
    Assert.equal(url.href, "http://example.org/foo/::");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/::");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "::23");
    Assert.equal(url.href, "http://example.org/foo/::23");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/::23");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", true), "foo://");
    Assert.equal(url.href, "foo:///");
    Assert.equal(url.protocol, "foo:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http://a:b@c:29/d");
    Assert.equal(url.href, "http://a:b@c:29/d");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, "a");
    Assert.equal(url.password, "b");
    Assert.equal(url.hostname, "c");
    Assert.equal(url.port, "29");
    Assert.equal(url.pathname, "/d");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http::@c:29");
    Assert.equal(url.href, "http://example.org/foo/:@c:29");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/:@c:29");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http://&a:foo(b]c@d:2/");
    Assert.equal(url.href, "http://&a:foo(b%5Dc@d:2/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, "&a");
    Assert.equal(url.password, "foo(b%5Dc");
    Assert.equal(url.hostname, "d");
    Assert.equal(url.port, "2");
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http://::@c@d:2");
    Assert.equal(url.href, "http://:%3A%40c@d:2/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, "%3A%40c");
    Assert.equal(url.hostname, "d");
    Assert.equal(url.port, "2");
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http://foo.com:b@d/");
    Assert.equal(url.href, "http://foo.com:b@d/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, "foo.com");
    Assert.equal(url.password, "b");
    Assert.equal(url.hostname, "d");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http://foo.com/\\@");
    Assert.equal(url.href, "http://foo.com//@");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "foo.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "//@");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http:\\\\foo.com\\");
    Assert.equal(url.href, "http://foo.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "foo.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http:\\\\a\\b:c\\d@foo.com\\");
    Assert.equal(url.href, "http://a/b:c/d@foo.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "a");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/b:c/d@foo.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", true), "foo:/");
    Assert.equal(url.href, "foo:/");
    Assert.equal(url.protocol, "foo:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", true), "foo:/bar.com/");
    Assert.equal(url.href, "foo:/bar.com/");
    Assert.equal(url.protocol, "foo:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/bar.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", true), "foo://///////");
    Assert.equal(url.href, "foo://///////");
    Assert.equal(url.protocol, "foo:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "///////");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", true), "foo://///////bar.com/");
    Assert.equal(url.href, "foo://///////bar.com/");
    Assert.equal(url.protocol, "foo:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "///////bar.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", true), "foo:////://///");
    Assert.equal(url.href, "foo:////://///");
    Assert.equal(url.protocol, "foo:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "//://///");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "c:/foo");
    Assert.equal(url.href, "c:/foo");
    Assert.equal(url.protocol, "c:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "//foo/bar");
    Assert.equal(url.href, "http://foo/bar");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "foo");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/bar");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http://foo/path;a??e#f#g");
    Assert.equal(url.href, "http://foo/path;a??e#f#g");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "foo");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/path;a");
    Assert.equal(url.search, "??e");
    Assert.equal(url.hash, "#f#g");

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http://foo/abcd?efgh?ijkl");
    Assert.equal(url.href, "http://foo/abcd?efgh?ijkl");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "foo");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/abcd");
    Assert.equal(url.search, "?efgh?ijkl");
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http://foo/abcd#foo?bar");
    Assert.equal(url.href, "http://foo/abcd#foo?bar");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "foo");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/abcd");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, "#foo?bar");

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "[61:24:74]:98");
    Assert.equal(url.href, "http://example.org/foo/[61:24:74]:98");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/[61:24:74]:98");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http:[61:27]/:foo");
    Assert.equal(url.href, "http://example.org/foo/[61:27]/:foo");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/[61:27]/:foo");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    Assert.fails(_ => Url.parse("http://[1::2]:3:4"));

    Assert.fails(_ => Url.parse("http://2001::1"));

    Assert.fails(_ => Url.parse("http://2001::1]"));

    Assert.fails(_ => Url.parse("http://2001::1]:80"));

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http://[2001::1]");
    Assert.equal(url.href, "http://[2001::1]/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "[2001::1]");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http://[::127.0.0.1]");
    Assert.equal(url.href, "http://[::7f00:1]/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "[::7f00:1]");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http://[0:0:0:0:0:0:13.1.68.3]");
    Assert.equal(url.href, "http://[::d01:4403]/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "[::d01:4403]");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http://[2001::1]:80");
    Assert.equal(url.href, "http://[2001::1]/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "[2001::1]");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http:/example.com/");
    Assert.equal(url.href, "http://example.org/example.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/example.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "ftp:/example.com/");
    Assert.equal(url.href, "ftp://example.com/");
    Assert.equal(url.protocol, "ftp:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "https:/example.com/");
    Assert.equal(url.href, "https://example.com/");
    Assert.equal(url.protocol, "https:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "madeupscheme:/example.com/");
    Assert.equal(url.href, "madeupscheme:/example.com/");
    Assert.equal(url.protocol, "madeupscheme:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/example.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "file:/example.com/");
    Assert.equal(url.href, "file:///example.com/");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/example.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "ftps:/example.com/");
    Assert.equal(url.href, "ftps:/example.com/");
    Assert.equal(url.protocol, "ftps:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/example.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "gopher:/example.com/");
    Assert.equal(url.href, "gopher://example.com/");
    Assert.equal(url.protocol, "gopher:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "ws:/example.com/");
    Assert.equal(url.href, "ws://example.com/");
    Assert.equal(url.protocol, "ws:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "wss:/example.com/");
    Assert.equal(url.href, "wss://example.com/");
    Assert.equal(url.protocol, "wss:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "data:/example.com/");
    Assert.equal(url.href, "data:/example.com/");
    Assert.equal(url.protocol, "data:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/example.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "javascript:/example.com/");
    Assert.equal(url.href, "javascript:/example.com/");
    Assert.equal(url.protocol, "javascript:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/example.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "mailto:/example.com/");
    Assert.equal(url.href, "mailto:/example.com/");
    Assert.equal(url.protocol, "mailto:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/example.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http:example.com/");
    Assert.equal(url.href, "http://example.org/foo/example.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/example.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "ftp:example.com/");
    Assert.equal(url.href, "ftp://example.com/");
    Assert.equal(url.protocol, "ftp:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "https:example.com/");
    Assert.equal(url.href, "https://example.com/");
    Assert.equal(url.protocol, "https:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "madeupscheme:example.com/");
    Assert.equal(url.href, "madeupscheme:example.com/");
    Assert.equal(url.protocol, "madeupscheme:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "example.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "ftps:example.com/");
    Assert.equal(url.href, "ftps:example.com/");
    Assert.equal(url.protocol, "ftps:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "example.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "gopher:example.com/");
    Assert.equal(url.href, "gopher://example.com/");
    Assert.equal(url.protocol, "gopher:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "ws:example.com/");
    Assert.equal(url.href, "ws://example.com/");
    Assert.equal(url.protocol, "ws:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "wss:example.com/");
    Assert.equal(url.href, "wss://example.com/");
    Assert.equal(url.protocol, "wss:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "data:example.com/");
    Assert.equal(url.href, "data:example.com/");
    Assert.equal(url.protocol, "data:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "example.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "javascript:example.com/");
    Assert.equal(url.href, "javascript:example.com/");
    Assert.equal(url.protocol, "javascript:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "example.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "mailto:example.com/");
    Assert.equal(url.href, "mailto:example.com/");
    Assert.equal(url.protocol, "mailto:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "example.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "/a/b/c");
    Assert.equal(url.href, "http://example.org/a/b/c");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/a/b/c");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "/a/ /c");
    Assert.equal(url.href, "http://example.org/a/%20/c");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/a/%20/c");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "/a%2fc");
    Assert.equal(url.href, "http://example.org/a%2fc");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/a%2fc");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "/a/%2f/c");
    Assert.equal(url.href, "http://example.org/a/%2f/c");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/a/%2f/c");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "#β");
    Assert.equal(url.href, "http://example.org/foo/bar#%CE%B2");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/bar");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, "#%CE%B2");

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "data:text/html,test#test");
    Assert.equal(url.href, "data:text/html,test#test");
    Assert.equal(url.protocol, "data:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "text/html,test");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, "#test");

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "tel:1234567890");
    Assert.equal(url.href, "tel:1234567890");
    Assert.equal(url.protocol, "tel:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "1234567890");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);
}

function testBasedonhttptracwebkitorgbrowsertrunkLayoutTestsfasturlfilehtml() {
    let url;

    url = Url.resolve(Url.parse("file:///tmp/mock/path", false), "file:c:\\foo\\bar.html");
    Assert.equal(url.href, "file:///c:/foo/bar.html");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/c:/foo/bar.html");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("file:///tmp/mock/path", false), "  File:c|////foo\\bar.html");
    Assert.equal(url.href, "file:///c:////foo/bar.html");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/c:////foo/bar.html");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("file:///tmp/mock/path", false), "C|/foo/bar");
    Assert.equal(url.href, "file:///C:/foo/bar");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/C:/foo/bar");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("file:///tmp/mock/path", false), "/C|\\foo\\bar");
    Assert.equal(url.href, "file:///C:/foo/bar");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/C:/foo/bar");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("file:///tmp/mock/path", false), "//C|/foo/bar");
    Assert.equal(url.href, "file:///C:/foo/bar");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/C:/foo/bar");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("file:///tmp/mock/path", false), "//server/file");
    Assert.equal(url.href, "file://server/file");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "server");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/file");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("file:///tmp/mock/path", false), "\\\\server\\file");
    Assert.equal(url.href, "file://server/file");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "server");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/file");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("file:///tmp/mock/path", false), "/\\server/file");
    Assert.equal(url.href, "file://server/file");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "server");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/file");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("file:///tmp/mock/path", false), "file:///foo/bar.txt");
    Assert.equal(url.href, "file:///foo/bar.txt");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/bar.txt");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("file:///tmp/mock/path", false), "file:///home/me");
    Assert.equal(url.href, "file:///home/me");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/home/me");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("file:///tmp/mock/path", false), "//");
    Assert.equal(url.href, "file:///");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("file:///tmp/mock/path", false), "///");
    Assert.equal(url.href, "file:///");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("file:///tmp/mock/path", false), "///test");
    Assert.equal(url.href, "file:///test");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/test");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("file:///tmp/mock/path", false), "file://test");
    Assert.equal(url.href, "file://test/");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "test");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("file:///tmp/mock/path", false), "file://localhost");
    Assert.equal(url.href, "file:///");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("file:///tmp/mock/path", false), "file://localhost/");
    Assert.equal(url.href, "file:///");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("file:///tmp/mock/path", false), "file://localhost/test");
    Assert.equal(url.href, "file:///test");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/test");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("file:///tmp/mock/path", false), "test");
    Assert.equal(url.href, "file:///tmp/mock/test");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/tmp/mock/test");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("file:///tmp/mock/path", false), "file:test");
    Assert.equal(url.href, "file:///tmp/mock/test");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/tmp/mock/test");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);
}

function testBasedonhttptracwebkitorgbrowsertrunkLayoutTestsfasturlscripttestspathjs() {
    let url;

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/././foo");
    Assert.equal(url.href, "http://example.com/foo");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/./.foo");
    Assert.equal(url.href, "http://example.com/.foo");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/.foo");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/foo/.");
    Assert.equal(url.href, "http://example.com/foo/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/foo/./");
    Assert.equal(url.href, "http://example.com/foo/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/foo/bar/..");
    Assert.equal(url.href, "http://example.com/foo/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/foo/bar/../");
    Assert.equal(url.href, "http://example.com/foo/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/foo/..bar");
    Assert.equal(url.href, "http://example.com/foo/..bar");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/..bar");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/foo/bar/../ton");
    Assert.equal(url.href, "http://example.com/foo/ton");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/ton");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/foo/bar/../ton/../../a");
    Assert.equal(url.href, "http://example.com/a");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/a");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/foo/../../..");
    Assert.equal(url.href, "http://example.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/foo/../../../ton");
    Assert.equal(url.href, "http://example.com/ton");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/ton");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/foo/%2e");
    Assert.equal(url.href, "http://example.com/foo/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/foo/%2e%2");
    Assert.equal(url.href, "http://example.com/foo/%2e%2");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/%2e%2");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/foo/%2e./%2e%2e/.%2e/%2e.bar");
    Assert.equal(url.href, "http://example.com/%2e.bar");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/%2e.bar");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com////../..");
    Assert.equal(url.href, "http://example.com//");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "//");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/foo/bar//../..");
    Assert.equal(url.href, "http://example.com/foo/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/foo/bar//..");
    Assert.equal(url.href, "http://example.com/foo/bar/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/bar/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/foo");
    Assert.equal(url.href, "http://example.com/foo");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/%20foo");
    Assert.equal(url.href, "http://example.com/%20foo");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/%20foo");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/foo%");
    Assert.equal(url.href, "http://example.com/foo%");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo%");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/foo%2");
    Assert.equal(url.href, "http://example.com/foo%2");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo%2");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/foo%2zbar");
    Assert.equal(url.href, "http://example.com/foo%2zbar");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo%2zbar");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/foo%2Â©zbar");
    Assert.equal(url.href, "http://example.com/foo%2%C3%82%C2%A9zbar");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo%2%C3%82%C2%A9zbar");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/foo%41%7a");
    Assert.equal(url.href, "http://example.com/foo%41%7a");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo%41%7a");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/foo\t%91");
    Assert.equal(url.href, "http://example.com/foo%C2%91%91");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo%C2%91%91");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/foo%00%51");
    Assert.equal(url.href, "http://example.com/foo%00%51");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo%00%51");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/(%28:%3A%29)");
    Assert.equal(url.href, "http://example.com/(%28:%3A%29)");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/(%28:%3A%29)");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/%3A%3a%3C%3c");
    Assert.equal(url.href, "http://example.com/%3A%3a%3C%3c");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/%3A%3a%3C%3c");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/foo\tbar");
    Assert.equal(url.href, "http://example.com/foobar");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foobar");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com\\\\foo\\\\bar");
    Assert.equal(url.href, "http://example.com//foo//bar");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "//foo//bar");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/%7Ffp3%3Eju%3Dduvgw%3Dd");
    Assert.equal(url.href, "http://example.com/%7Ffp3%3Eju%3Dduvgw%3Dd");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/%7Ffp3%3Eju%3Dduvgw%3Dd");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/@asdf%40");
    Assert.equal(url.href, "http://example.com/@asdf%40");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/@asdf%40");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/你好你好");
    Assert.equal(url.href, "http://example.com/%E4%BD%A0%E5%A5%BD%E4%BD%A0%E5%A5%BD");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/%E4%BD%A0%E5%A5%BD%E4%BD%A0%E5%A5%BD");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/‥/foo");
    Assert.equal(url.href, "http://example.com/%E2%80%A5/foo");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/%E2%80%A5/foo");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/﻿/foo");
    Assert.equal(url.href, "http://example.com/%EF%BB%BF/foo");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/%EF%BB%BF/foo");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://example.com/‮/foo/‭/bar");
    Assert.equal(url.href, "http://example.com/%E2%80%AE/foo/%E2%80%AD/bar");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/%E2%80%AE/foo/%E2%80%AD/bar");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);
}

function testBasedonhttptracwebkitorgbrowsertrunkLayoutTestsfasturlscripttestsrelativejs() {
    let url;

    url = Url.resolve(Url.parse("about:blank", false), "http://www.google.com/foo?bar=baz#");
    Assert.equal(url.href, "http://www.google.com/foo?bar=baz#");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "www.google.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo");
    Assert.equal(url.search, "?bar=baz");
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://www.google.com/foo?bar=baz# »");
    Assert.equal(url.href, "http://www.google.com/foo?bar=baz# %C2%BB");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "www.google.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo");
    Assert.equal(url.search, "?bar=baz");
    Assert.equal(url.hash, "# %C2%BB");

    url = Url.resolve(Url.parse("about:blank", false), "data:test# »");
    Assert.equal(url.href, "data:test# %C2%BB");
    Assert.equal(url.protocol, "data:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "test");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, "# %C2%BB");

    url = Url.resolve(Url.parse("about:blank", false), "http://www.google.com");
    Assert.equal(url.href, "http://www.google.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "www.google.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://192.0x00A80001");
    Assert.equal(url.href, "http://192.168.0.1/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "192.168.0.1");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://www/foo%2Ehtml");
    Assert.equal(url.href, "http://www/foo%2Ehtml");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "www");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo%2Ehtml");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://www/foo/%2E/html");
    Assert.equal(url.href, "http://www/foo/html");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "www");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/html");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    Assert.fails(_ => Url.parse("http://user:pass@/"));

    url = Url.resolve(Url.parse("about:blank", false), "http://%25DOMAIN:foobar@foodomain.com/");
    Assert.equal(url.href, "http://%25DOMAIN:foobar@foodomain.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, "%25DOMAIN");
    Assert.equal(url.password, "foobar");
    Assert.equal(url.hostname, "foodomain.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http:\\\\www.google.com\\foo");
    Assert.equal(url.href, "http://www.google.com/foo");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "www.google.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://foo:80/");
    Assert.equal(url.href, "http://foo/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "foo");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://foo:81/");
    Assert.equal(url.href, "http://foo:81/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "foo");
    Assert.equal(url.port, "81");
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "httpa://foo:80/");
    Assert.equal(url.href, "httpa://foo:80/");
    Assert.equal(url.protocol, "httpa:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "foo");
    Assert.equal(url.port, "80");
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    Assert.fails(_ => Url.parse("http://foo:-80/"));

    url = Url.resolve(Url.parse("about:blank", false), "https://foo:443/");
    Assert.equal(url.href, "https://foo/");
    Assert.equal(url.protocol, "https:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "foo");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "https://foo:80/");
    Assert.equal(url.href, "https://foo:80/");
    Assert.equal(url.protocol, "https:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "foo");
    Assert.equal(url.port, "80");
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "ftp://foo:21/");
    Assert.equal(url.href, "ftp://foo/");
    Assert.equal(url.protocol, "ftp:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "foo");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "ftp://foo:80/");
    Assert.equal(url.href, "ftp://foo:80/");
    Assert.equal(url.protocol, "ftp:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "foo");
    Assert.equal(url.port, "80");
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "gopher://foo:70/");
    Assert.equal(url.href, "gopher://foo/");
    Assert.equal(url.protocol, "gopher:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "foo");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "gopher://foo:443/");
    Assert.equal(url.href, "gopher://foo:443/");
    Assert.equal(url.protocol, "gopher:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "foo");
    Assert.equal(url.port, "443");
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "ws://foo:80/");
    Assert.equal(url.href, "ws://foo/");
    Assert.equal(url.protocol, "ws:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "foo");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "ws://foo:81/");
    Assert.equal(url.href, "ws://foo:81/");
    Assert.equal(url.protocol, "ws:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "foo");
    Assert.equal(url.port, "81");
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "ws://foo:443/");
    Assert.equal(url.href, "ws://foo:443/");
    Assert.equal(url.protocol, "ws:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "foo");
    Assert.equal(url.port, "443");
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "ws://foo:815/");
    Assert.equal(url.href, "ws://foo:815/");
    Assert.equal(url.protocol, "ws:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "foo");
    Assert.equal(url.port, "815");
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "wss://foo:80/");
    Assert.equal(url.href, "wss://foo:80/");
    Assert.equal(url.protocol, "wss:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "foo");
    Assert.equal(url.port, "80");
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "wss://foo:81/");
    Assert.equal(url.href, "wss://foo:81/");
    Assert.equal(url.protocol, "wss:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "foo");
    Assert.equal(url.port, "81");
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "wss://foo:443/");
    Assert.equal(url.href, "wss://foo/");
    Assert.equal(url.protocol, "wss:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "foo");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "wss://foo:815/");
    Assert.equal(url.href, "wss://foo:815/");
    Assert.equal(url.protocol, "wss:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "foo");
    Assert.equal(url.port, "815");
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http:/example.com/");
    Assert.equal(url.href, "http://example.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "ftp:/example.com/");
    Assert.equal(url.href, "ftp://example.com/");
    Assert.equal(url.protocol, "ftp:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "https:/example.com/");
    Assert.equal(url.href, "https://example.com/");
    Assert.equal(url.protocol, "https:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "madeupscheme:/example.com/");
    Assert.equal(url.href, "madeupscheme:/example.com/");
    Assert.equal(url.protocol, "madeupscheme:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/example.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "file:/example.com/");
    Assert.equal(url.href, "file:///example.com/");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/example.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "ftps:/example.com/");
    Assert.equal(url.href, "ftps:/example.com/");
    Assert.equal(url.protocol, "ftps:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/example.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "gopher:/example.com/");
    Assert.equal(url.href, "gopher://example.com/");
    Assert.equal(url.protocol, "gopher:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "ws:/example.com/");
    Assert.equal(url.href, "ws://example.com/");
    Assert.equal(url.protocol, "ws:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "wss:/example.com/");
    Assert.equal(url.href, "wss://example.com/");
    Assert.equal(url.protocol, "wss:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "data:/example.com/");
    Assert.equal(url.href, "data:/example.com/");
    Assert.equal(url.protocol, "data:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/example.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "javascript:/example.com/");
    Assert.equal(url.href, "javascript:/example.com/");
    Assert.equal(url.protocol, "javascript:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/example.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "mailto:/example.com/");
    Assert.equal(url.href, "mailto:/example.com/");
    Assert.equal(url.protocol, "mailto:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/example.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http:example.com/");
    Assert.equal(url.href, "http://example.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "ftp:example.com/");
    Assert.equal(url.href, "ftp://example.com/");
    Assert.equal(url.protocol, "ftp:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "https:example.com/");
    Assert.equal(url.href, "https://example.com/");
    Assert.equal(url.protocol, "https:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "madeupscheme:example.com/");
    Assert.equal(url.href, "madeupscheme:example.com/");
    Assert.equal(url.protocol, "madeupscheme:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "example.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "ftps:example.com/");
    Assert.equal(url.href, "ftps:example.com/");
    Assert.equal(url.protocol, "ftps:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "example.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "gopher:example.com/");
    Assert.equal(url.href, "gopher://example.com/");
    Assert.equal(url.protocol, "gopher:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "ws:example.com/");
    Assert.equal(url.href, "ws://example.com/");
    Assert.equal(url.protocol, "ws:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "wss:example.com/");
    Assert.equal(url.href, "wss://example.com/");
    Assert.equal(url.protocol, "wss:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "data:example.com/");
    Assert.equal(url.href, "data:example.com/");
    Assert.equal(url.protocol, "data:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "example.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "javascript:example.com/");
    Assert.equal(url.href, "javascript:example.com/");
    Assert.equal(url.protocol, "javascript:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "example.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "mailto:example.com/");
    Assert.equal(url.href, "mailto:example.com/");
    Assert.equal(url.protocol, "mailto:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "example.com/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);
}

function testBasedonhttptracwebkitorgbrowsertrunkLayoutTestsfasturlsegmentsuserinfovshosthtml() {
    let url;

    url = Url.resolve(Url.parse("about:blank", false), "http:@www.example.com");
    Assert.equal(url.href, "http://www.example.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "www.example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http:/@www.example.com");
    Assert.equal(url.href, "http://www.example.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "www.example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://@www.example.com");
    Assert.equal(url.href, "http://www.example.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "www.example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http:a:b@www.example.com");
    Assert.equal(url.href, "http://a:b@www.example.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, "a");
    Assert.equal(url.password, "b");
    Assert.equal(url.hostname, "www.example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http:/a:b@www.example.com");
    Assert.equal(url.href, "http://a:b@www.example.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, "a");
    Assert.equal(url.password, "b");
    Assert.equal(url.hostname, "www.example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://a:b@www.example.com");
    Assert.equal(url.href, "http://a:b@www.example.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, "a");
    Assert.equal(url.password, "b");
    Assert.equal(url.hostname, "www.example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://@pple.com");
    Assert.equal(url.href, "http://pple.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "pple.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http::b@www.example.com");
    Assert.equal(url.href, "http://:b@www.example.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, "b");
    Assert.equal(url.hostname, "www.example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http:/:b@www.example.com");
    Assert.equal(url.href, "http://:b@www.example.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, "b");
    Assert.equal(url.hostname, "www.example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://:b@www.example.com");
    Assert.equal(url.href, "http://:b@www.example.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, "b");
    Assert.equal(url.hostname, "www.example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    Assert.fails(_ => Url.parse("http:/:@/www.example.com"));

    Assert.fails(_ => Url.parse("http://user@/www.example.com"));

    Assert.fails(_ => Url.parse("http:@/www.example.com"));

    Assert.fails(_ => Url.parse("http:/@/www.example.com"));

    Assert.fails(_ => Url.parse("http://@/www.example.com"));

    Assert.fails(_ => Url.parse("https:@/www.example.com"));

    Assert.fails(_ => Url.parse("http:a:b@/www.example.com"));

    Assert.fails(_ => Url.parse("http:/a:b@/www.example.com"));

    Assert.fails(_ => Url.parse("http://a:b@/www.example.com"));

    Assert.fails(_ => Url.parse("http::@/www.example.com"));

    url = Url.resolve(Url.parse("about:blank", false), "http:a:@www.example.com");
    Assert.equal(url.href, "http://a@www.example.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, "a");
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "www.example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http:/a:@www.example.com");
    Assert.equal(url.href, "http://a@www.example.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, "a");
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "www.example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://a:@www.example.com");
    Assert.equal(url.href, "http://a@www.example.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, "a");
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "www.example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://www.@pple.com");
    Assert.equal(url.href, "http://www.@pple.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, "www.");
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "pple.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    Assert.fails(_ => Url.parse("http:@:www.example.com"));

    Assert.fails(_ => Url.parse("http:/@:www.example.com"));

    Assert.fails(_ => Url.parse("http://@:www.example.com"));

    url = Url.resolve(Url.parse("about:blank", false), "http://:@www.example.com");
    Assert.equal(url.href, "http://www.example.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "www.example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);
}

function testOthers() {
    let url;

    url = Url.resolve(Url.parse("http://www.example.com/test", false), "/");
    Assert.equal(url.href, "http://www.example.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "www.example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://www.example.com/test", false), "/test.txt");
    Assert.equal(url.href, "http://www.example.com/test.txt");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "www.example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/test.txt");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://www.example.com/test", false), ".");
    Assert.equal(url.href, "http://www.example.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "www.example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://www.example.com/test", false), "..");
    Assert.equal(url.href, "http://www.example.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "www.example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://www.example.com/test", false), "test.txt");
    Assert.equal(url.href, "http://www.example.com/test.txt");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "www.example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/test.txt");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://www.example.com/test", false), "./test.txt");
    Assert.equal(url.href, "http://www.example.com/test.txt");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "www.example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/test.txt");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://www.example.com/test", false), "../test.txt");
    Assert.equal(url.href, "http://www.example.com/test.txt");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "www.example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/test.txt");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://www.example.com/test", false), "../aaa/test.txt");
    Assert.equal(url.href, "http://www.example.com/aaa/test.txt");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "www.example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/aaa/test.txt");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://www.example.com/test", false), "../../test.txt");
    Assert.equal(url.href, "http://www.example.com/test.txt");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "www.example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/test.txt");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://www.example.com/test", false), "中/test.txt");
    Assert.equal(url.href, "http://www.example.com/%E4%B8%AD/test.txt");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "www.example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/%E4%B8%AD/test.txt");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://www.example.com/test", false), "http://www.example2.com");
    Assert.equal(url.href, "http://www.example2.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "www.example2.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://www.example.com/test", false), "//www.example2.com");
    Assert.equal(url.href, "http://www.example2.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "www.example2.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://www.example.com/test", false), "file:...");
    Assert.equal(url.href, "file:///...");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/...");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://www.example.com/test", false), "file:..");
    Assert.equal(url.href, "file:///");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://www.example.com/test", false), "file:a");
    Assert.equal(url.href, "file:///a");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/a");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);
}

function testBasiccanonicalizationuppercaseshouldbeconvertedtolowercase() {
    let url;

    url = Url.resolve(Url.parse("http://other.com/", false), "http://ExAmPlE.CoM");
    Assert.equal(url.href, "http://example.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    Assert.fails(_ => Url.parse("http://example example.com"));

    Assert.fails(_ => Url.parse("http://Goo%20 goo%7C|.com"));

    Assert.fails(_ => Url.parse("http://[]"));

    Assert.fails(_ => Url.parse("http://[:]"));
}

function testU3000ismappedtoU0020spacewhichisdisallowed() {

    Assert.fails(_ => Url.parse("http://GOO 　goo.com"));
}

function testOthertypesofspacenobreakzerowidthzerowidthnobreakarenamepreppedawaytonothingU200BU2060andUFEFFareignored() {
    let url;

    url = Url.resolve(Url.parse("http://other.com/", false), "http://GOO​⁠﻿goo.com");
    Assert.equal(url.href, "http://googoo.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "googoo.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);
}

function testIdeographicfullstopfullwidthperiodforChineseetcshouldbetreatedasadotU3002ismappedtoU002Edot() {
    let url;

    url = Url.resolve(Url.parse("http://other.com/", false), "http://www.foo。bar.com");
    Assert.equal(url.href, "http://www.foo.bar.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "www.foo.bar.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);
}

function testInvalidunicodecharactersshouldfailUFDD0isdisallowedefb790isUFDD0() {

    Assert.fails(_ => Url.parse("http://﷐zyx.com"));
}

function testThisisthesameaspreviousbutescaped() {

    Assert.fails(_ => Url.parse("http://%ef%b7%90zyx.com"));
}

function testTestnamepreppingfullwidthinputshouldbeconvertedtoASCIIandNOTIDNizedThisisGoinfullwidthUTF8UTF16() {
    let url;

    url = Url.resolve(Url.parse("http://other.com/", false), "http://Ｇｏ.com");
    Assert.equal(url.href, "http://go.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "go.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);
}

function testURLspecforbidsthefollowinghttpswwww3orgBugsPublicshowbugcgiid24257() {

    Assert.fails(_ => Url.parse("http://％４１.com"));

    Assert.fails(_ => Url.parse("http://%ef%bc%85%ef%bc%94%ef%bc%91.com"));
}

function test00infullwidthshouldfailalsoasescapedUTF8input() {

    Assert.fails(_ => Url.parse("http://％００.com"));

    Assert.fails(_ => Url.parse("http://%ef%bc%85%ef%bc%90%ef%bc%90.com"));
}

function testBasicIDNsupportUTF8andUTF16inputshouldbeconvertedtoIDN() {
    let url;

    url = Url.resolve(Url.parse("http://other.com/", false), "http://你好你好");
    Assert.equal(url.href, "http://xn--6qqa088eba/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "xn--6qqa088eba");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);
}

function testInvalidescapedcharactersshouldfailandthepercentsshouldbeescapedhttpswwww3orgBugsPublicshowbugcgiid24191() {

    Assert.fails(_ => Url.parse("http://%zz%66%a.com"));
}

function testIfwegetaninvalidcharacterthathasbeenescaped() {

    Assert.fails(_ => Url.parse("http://%25"));

    Assert.fails(_ => Url.parse("http://hello%00"));
}

function testEscapednumbersshouldbetreatedlikeIPaddressesiftheyare() {
    let url;

    url = Url.resolve(Url.parse("http://other.com/", false), "http://%30%78%63%30%2e%30%32%35%30.01");
    Assert.equal(url.href, "http://192.168.0.1/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "192.168.0.1");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://other.com/", false), "http://%30%78%63%30%2e%30%32%35%30.01%2e");
    Assert.equal(url.href, "http://192.168.0.1/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "192.168.0.1");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    Assert.fails(_ => Url.parse("http://192.168.0.257"));
}

function testInvalidescapingshouldtriggertheregularhosterrorhandling() {

    Assert.fails(_ => Url.parse("http://%3g%78%63%30%2e%30%32%35%30%2E.01"));
}

function testSomethingthatisntexactlyanIPshouldgettreatedasahostandspacesescaped() {

    Assert.fails(_ => Url.parse("http://192.168.0.1 hello"));
}

function testFullwidthandescapedUTF8fullwidthshouldstillbetreatedasIP() {
    let url;

    url = Url.resolve(Url.parse("http://other.com/", false), "http://０Ｘｃ０．０２５０．０１");
    Assert.equal(url.href, "http://192.168.0.1/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "192.168.0.1");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);
}

function testBrokenIPv6() {

    Assert.fails(_ => Url.parse("http://[www.google.com]/"));

    Assert.fails(_ => Url.parse("http://[google.com]"));

    Assert.fails(_ => Url.parse("http://[::1.2.3.4x]"));

    Assert.fails(_ => Url.parse("http://[::1.2.3.]"));

    Assert.fails(_ => Url.parse("http://[::1.2.]"));

    Assert.fails(_ => Url.parse("http://[::1.]"));
}

function testMiscUnicode() {
    let url;

    url = Url.resolve(Url.parse("http://other.com/", false), "http://foo:💩@example.com/bar");
    Assert.equal(url.href, "http://foo:%F0%9F%92%A9@example.com/bar");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, "foo");
    Assert.equal(url.password, "%F0%9F%92%A9");
    Assert.equal(url.hostname, "example.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/bar");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);
}

function testresolvingafragmentagainstanyschemesucceeds() {
    let url;

    url = Url.resolve(Url.parse("test:test", false), "#");
    Assert.equal(url.href, "test:test#");
    Assert.equal(url.protocol, "test:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "test");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("mailto:x@x.com", false), "#x");
    Assert.equal(url.href, "mailto:x@x.com#x");
    Assert.equal(url.protocol, "mailto:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "x@x.com");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, "#x");

    url = Url.resolve(Url.parse("data:,", false), "#x");
    Assert.equal(url.href, "data:,#x");
    Assert.equal(url.protocol, "data:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, ",");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, "#x");

    url = Url.resolve(Url.parse("about:blank", false), "#x");
    Assert.equal(url.href, "about:blank#x");
    Assert.equal(url.protocol, "about:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "blank");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, "#x");

    url = Url.resolve(Url.parse("test:test?test", false), "#");
    Assert.equal(url.href, "test:test?test#");
    Assert.equal(url.protocol, "test:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "test");
    Assert.equal(url.search, "?test");
    Assert.equal(url.hash, null);
}

function testmultipleinauthoritystate() {
    let url;

    url = Url.resolve(Url.parse("http://doesnotmatter/", false), "https://@test@test@example:800/");
    Assert.equal(url.href, "https://%40test%40test@example:800/");
    Assert.equal(url.protocol, "https:");
    Assert.equal(url.username, "%40test%40test");
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example");
    Assert.equal(url.port, "800");
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://doesnotmatter/", false), "https://@@@example");
    Assert.equal(url.href, "https://%40%40@example/");
    Assert.equal(url.protocol, "https:");
    Assert.equal(url.username, "%40%40");
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);
}

function testnonaz09characters() {
    let url;

    url = Url.resolve(Url.parse("http://doesnotmatter/", false), "http://`{}:`{}@h/`{}?`{}");
    Assert.equal(url.href, "http://%60%7B%7D:%60%7B%7D@h/%60%7B%7D?`{}");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, "%60%7B%7D");
    Assert.equal(url.password, "%60%7B%7D");
    Assert.equal(url.hostname, "h");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/%60%7B%7D");
    Assert.equal(url.search, "?`{}");
    Assert.equal(url.hash, null);
}

function testCredentialsinbase() {
    let url;

    url = Url.resolve(Url.parse("http://user@example.org/smth", false), "/some/path");
    Assert.equal(url.href, "http://user@example.org/some/path");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, "user");
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/some/path");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://user:pass@example.org:21/smth", false), null);
    Assert.equal(url.href, "http://user:pass@example.org:21/smth");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, "user");
    Assert.equal(url.password, "pass");
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, "21");
    Assert.equal(url.pathname, "/smth");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://user:pass@example.org:21/smth", false), "/some/path");
    Assert.equal(url.href, "http://user:pass@example.org:21/some/path");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, "user");
    Assert.equal(url.password, "pass");
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, "21");
    Assert.equal(url.pathname, "/some/path");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);
}

function testasetoftestsdesignedbyzcorpanforrelativeURLswithunknownschemes() {
    let url;

    Assert.fails(_ => Url.parse("i"));

    Assert.fails(_ => Url.parse("i"));

    url = Url.resolve(Url.parse("sc:/pa/pa", false), "i");
    Assert.equal(url.href, "sc:/pa/i");
    Assert.equal(url.protocol, "sc:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/pa/i");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("sc://ho/pa", false), "i");
    Assert.equal(url.href, "sc://ho/i");
    Assert.equal(url.protocol, "sc:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "ho");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/i");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("sc:///pa/pa", false), "i");
    Assert.equal(url.href, "sc:///pa/i");
    Assert.equal(url.protocol, "sc:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/pa/i");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    Assert.fails(_ => Url.parse("../i"));

    Assert.fails(_ => Url.parse("../i"));

    url = Url.resolve(Url.parse("sc:/pa/pa", false), "../i");
    Assert.equal(url.href, "sc:/i");
    Assert.equal(url.protocol, "sc:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/i");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("sc://ho/pa", false), "../i");
    Assert.equal(url.href, "sc://ho/i");
    Assert.equal(url.protocol, "sc:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "ho");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/i");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("sc:///pa/pa", false), "../i");
    Assert.equal(url.href, "sc:///i");
    Assert.equal(url.protocol, "sc:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/i");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    Assert.fails(_ => Url.parse("/i"));

    Assert.fails(_ => Url.parse("/i"));

    url = Url.resolve(Url.parse("sc:/pa/pa", false), "/i");
    Assert.equal(url.href, "sc:/i");
    Assert.equal(url.protocol, "sc:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/i");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("sc://ho/pa", false), "/i");
    Assert.equal(url.href, "sc://ho/i");
    Assert.equal(url.protocol, "sc:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "ho");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/i");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("sc:///pa/pa", false), "/i");
    Assert.equal(url.href, "sc:///i");
    Assert.equal(url.protocol, "sc:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/i");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    Assert.fails(_ => Url.parse("?i"));

    Assert.fails(_ => Url.parse("?i"));

    url = Url.resolve(Url.parse("sc:/pa/pa", false), "?i");
    Assert.equal(url.href, "sc:/pa/pa?i");
    Assert.equal(url.protocol, "sc:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/pa/pa");
    Assert.equal(url.search, "?i");
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("sc://ho/pa", false), "?i");
    Assert.equal(url.href, "sc://ho/pa?i");
    Assert.equal(url.protocol, "sc:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "ho");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/pa");
    Assert.equal(url.search, "?i");
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("sc:///pa/pa", false), "?i");
    Assert.equal(url.href, "sc:///pa/pa?i");
    Assert.equal(url.protocol, "sc:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/pa/pa");
    Assert.equal(url.search, "?i");
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("sc:sd", false), "#i");
    Assert.equal(url.href, "sc:sd#i");
    Assert.equal(url.protocol, "sc:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "sd");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, "#i");

    url = Url.resolve(Url.parse("sc:sd/sd", false), "#i");
    Assert.equal(url.href, "sc:sd/sd#i");
    Assert.equal(url.protocol, "sc:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "sd/sd");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, "#i");

    url = Url.resolve(Url.parse("sc:/pa/pa", false), "#i");
    Assert.equal(url.href, "sc:/pa/pa#i");
    Assert.equal(url.protocol, "sc:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/pa/pa");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, "#i");

    url = Url.resolve(Url.parse("sc://ho/pa", false), "#i");
    Assert.equal(url.href, "sc://ho/pa#i");
    Assert.equal(url.protocol, "sc:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "ho");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/pa");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, "#i");

    url = Url.resolve(Url.parse("sc:///pa/pa", false), "#i");
    Assert.equal(url.href, "sc:///pa/pa#i");
    Assert.equal(url.protocol, "sc:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/pa/pa");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, "#i");
}

function testmakesurethatrelativeURLlogicworksonknowntypicallynonrelativeschemestoo() {
    let url;

    url = Url.resolve(Url.parse("about:blank", false), "about:/../");
    Assert.equal(url.href, "about:/");
    Assert.equal(url.protocol, "about:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "data:/../");
    Assert.equal(url.href, "data:/");
    Assert.equal(url.protocol, "data:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "javascript:/../");
    Assert.equal(url.href, "javascript:/");
    Assert.equal(url.protocol, "javascript:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "mailto:/../");
    Assert.equal(url.href, "mailto:/");
    Assert.equal(url.protocol, "mailto:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);
}

function testunknownschemesandnonASCIIdomains() {
    let url;

    url = Url.resolve(Url.parse("about:blank", false), "sc://ñ.test/");
    Assert.equal(url.href, "sc://xn--ida.test/");
    Assert.equal(url.protocol, "sc:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "xn--ida.test");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);
}

function testunknownschemesandbackslashes() {
    let url;

    url = Url.resolve(Url.parse("about:blank", false), "sc:\\../");
    Assert.equal(url.href, "sc:\\../");
    Assert.equal(url.protocol, "sc:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "\\../");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);
}

function testunknownschemewithpathlookinglikeapassword() {
    let url;

    url = Url.resolve(Url.parse("about:blank", false), "sc::a@example.net");
    Assert.equal(url.href, "sc::a@example.net");
    Assert.equal(url.protocol, "sc:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, ":a@example.net");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);
}

function testtestsfromjsdomwhatwgurldesignedforcodecoverage() {
    let url;

    url = Url.resolve(Url.parse("about:blank", false), "http://127.0.0.1:10100/relative_import.html");
    Assert.equal(url.href, "http://127.0.0.1:10100/relative_import.html");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "127.0.0.1");
    Assert.equal(url.port, "10100");
    Assert.equal(url.pathname, "/relative_import.html");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "http://facebook.com/?foo=%7B%22abc%22");
    Assert.equal(url.href, "http://facebook.com/?foo=%7B%22abc%22");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "facebook.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, "?foo=%7B%22abc%22");
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("about:blank", false), "https://localhost:3000/jqueryui@1.2.3");
    Assert.equal(url.href, "https://localhost:3000/jqueryui@1.2.3");
    Assert.equal(url.protocol, "https:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "localhost");
    Assert.equal(url.port, "3000");
    Assert.equal(url.pathname, "/jqueryui@1.2.3");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);
}

function testtabLFCR() {
    let url;

    url = Url.resolve(Url.parse("about:blank", false), "h\tt\nt\rp://h\to\ns\rt:9\t0\n0\r0/p\ta\nt\rh?q\tu\ne\rry#f\tr\na\rg");
    Assert.equal(url.href, "http://host:9000/path?query#frag");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "host");
    Assert.equal(url.port, "9000");
    Assert.equal(url.pathname, "/path");
    Assert.equal(url.search, "?query");
    Assert.equal(url.hash, "#frag");
}

function testStringificationofURLsearchParams() {
    let url;

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "?a=b&c=d");
    Assert.equal(url.href, "http://example.org/foo/bar?a=b&c=d");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/bar");
    Assert.equal(url.search, "?a=b&c=d");
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "??a=b&c=d");
    Assert.equal(url.href, "http://example.org/foo/bar??a=b&c=d");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/bar");
    Assert.equal(url.search, "??a=b&c=d");
    Assert.equal(url.hash, null);
}

function testSchemeonly() {
    let url;

    url = Url.resolve(Url.parse("http://example.org/foo/bar", false), "http:");
    Assert.equal(url.href, "http://example.org/foo/bar");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "example.org");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/foo/bar");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    Assert.fails(_ => Url.parse("http:"));

    url = Url.resolve(Url.parse("https://example.org/foo/bar", false), "sc:");
    Assert.equal(url.href, "sc:");
    Assert.equal(url.protocol, "sc:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, null);
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);
}

function testPercentencodingoffragments() {
    let url;

    url = Url.resolve(Url.parse("about:blank", false), "http://foo.bar/baz?qux#foobar");
    Assert.equal(url.href, "http://foo.bar/baz?qux#foo%08bar");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "foo.bar");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/baz");
    Assert.equal(url.search, "?qux");
    Assert.equal(url.hash, "#foo%08bar");
}

function testIPv4parsingviahttpsgithubcomnodejsnodepull10317() {
    let url;

    url = Url.resolve(Url.parse("http://other.com/", false), "http://192.168.257");
    Assert.equal(url.href, "http://192.168.1.1/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "192.168.1.1");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://other.com/", false), "http://192.168.257.com");
    Assert.equal(url.href, "http://192.168.257.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "192.168.257.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://other.com/", false), "http://256");
    Assert.equal(url.href, "http://0.0.1.0/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "0.0.1.0");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://other.com/", false), "http://256.com");
    Assert.equal(url.href, "http://256.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "256.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://other.com/", false), "http://999999999");
    Assert.equal(url.href, "http://59.154.201.255/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "59.154.201.255");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://other.com/", false), "http://999999999.com");
    Assert.equal(url.href, "http://999999999.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "999999999.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    Assert.fails(_ => Url.parse("http://10000000000"));

    url = Url.resolve(Url.parse("http://other.com/", false), "http://10000000000.com");
    Assert.equal(url.href, "http://10000000000.com/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "10000000000.com");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("http://other.com/", false), "http://4294967295");
    Assert.equal(url.href, "http://255.255.255.255/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "255.255.255.255");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    Assert.fails(_ => Url.parse("http://4294967296"));

    url = Url.resolve(Url.parse("http://other.com/", false), "http://0xffffffff");
    Assert.equal(url.href, "http://255.255.255.255/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "255.255.255.255");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    Assert.fails(_ => Url.parse("http://0xffffffff1"));

    Assert.fails(_ => Url.parse("http://256.256.256.256"));

    url = Url.resolve(Url.parse("http://other.com/", false), "http://256.256.256.256.256");
    Assert.equal(url.href, "http://256.256.256.256.256/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "256.256.256.256.256");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);
}

function testfileURLsrelativetootherfileURLsviahttpsgithubcomjsdomwhatwgurlpull60() {
    let url;

    url = Url.resolve(Url.parse("file:///C:/Users/Domenic/Dropbox/GitHub/tmpvar/jsdom/test/level2/html/files/anchor.html", false), "pix/submit.gif");
    Assert.equal(url.href, "file:///C:/Users/Domenic/Dropbox/GitHub/tmpvar/jsdom/test/level2/html/files/pix/submit.gif");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/C:/Users/Domenic/Dropbox/GitHub/tmpvar/jsdom/test/level2/html/files/pix/submit.gif");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("file:///C:/", false), "..");
    Assert.equal(url.href, "file:///C:/");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/C:/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("file:///", false), "..");
    Assert.equal(url.href, "file:///");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);
}

function testMorefileURLtestsbyzcorpan() {
    let url;

    url = Url.resolve(Url.parse("file:///C:/a/b", false), "/");
    Assert.equal(url.href, "file:///C:/");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/C:/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("file:///C:/a/b", false), "//d:");
    Assert.equal(url.href, "file:///d:");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/d:");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("file:///C:/a/b", false), "//d:/..");
    Assert.equal(url.href, "file:///d:/");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/d:/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("file:///ab:/", false), "..");
    Assert.equal(url.href, "file:///");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);

    url = Url.resolve(Url.parse("file:///1:/", false), "..");
    Assert.equal(url.href, "file:///");
    Assert.equal(url.protocol, "file:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, null);
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);
}

function testIPv6trailingzerostest() {
    let url;

    url = Url.resolve(Url.parse("http://example.net/", false), "http://[1:0::]");
    Assert.equal(url.href, "http://[1::]/");
    Assert.equal(url.protocol, "http:");
    Assert.equal(url.username, null);
    Assert.equal(url.password, null);
    Assert.equal(url.hostname, "[1::]");
    Assert.equal(url.port, null);
    Assert.equal(url.pathname, "/");
    Assert.equal(url.search, null);
    Assert.equal(url.hash, null);
}
