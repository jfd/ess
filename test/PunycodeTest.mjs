import * as Assert from "../src/Assert.mjs";
import * as Punycode from "../src/Punycode.mjs";

export {testArabic};
export {testAsciiBreaksHostnameRules};
export {testChineseSimplified};
export {testChineseTraditional};
export {testConsecutiveAstralSymbols};
export {testCzech};
export {testDecodeEtc};
export {testDomains};
export {testEmail};
export {testEmoji};
export {testHebrew};
export {testHighSurrogateFollowedByAonotherHigh};
export {testHighSurrogateFollowedByNonSurrogates};
export {testHindi};
export {testJapanese};
export {testKorean};
export {testLongStrAsciiAndNonAsciiChars};
export {testLowSurrogateFollowedByLowSurrogate};
export {testLowSurrogateFollowedByNonSurrogates};
export {testMixAsciiAndNonAsciiChars};
export {testMultipleNonAsciiChars};
export {testNonPrintableAscii};
export {testRussian};
export {testSpanish};
export {testSingleBasicCodePoint};
export {testSingleNonAschiiChar};
export {testU002EAsSeparator};
export {testU3002AsSeparator};
export {testUFF0EAsSeparator};
export {testUFF61AsSeparator};
export {testUnmatchedHighSurrogate};
export {testUnmatchedLowSurrogate};
export {testVietnamese};

function testArabic() {
    testDecode("egbpdaj6bu4bxfgehfvwxn", "\u0644\u064A\u0647\u0645\u0627\u0628\u062A\u0643\u0644\u0645\u0648\u0634\u0639\u0631\u0628\u064A\u061F");
}

function testAsciiBreaksHostnameRules() {
    testDecode("-> $1.00 <--", "-> $1.00 <-");
}

function testChineseSimplified() {
    testDecode("ihqwcrb4cv8a8dqg056pqjye", "\u4ED6\u4EEC\u4E3A\u4EC0\u4E48\u4E0D\u8BF4\u4E2d\u6587");
}

function testChineseTraditional() {
    testDecode("ihqwctvzc91f659drss3x8bo0yb", "\u4ED6\u5011\u7232\u4EC0\u9EBD\u4E0D\u8AAA\u4E2D\u6587");
}

function testConsecutiveAstralSymbols() {
    testUcs2Decode("\uD83C\uDF55\uD835\uDC00\uD834\uDF06\uD834\uDF56", [127829, 119808, 119558, 119638]);
}

function testCzech() {
    testDecode("Proprostnemluvesky-uyb24dma41a", "Pro\u010Dprost\u011Bnemluv\xED\u010Desky");
}

function testDecodeEtc() {
    testDecode("3B-ww4c5e180e575a65lsy2b", "3\u5E74B\u7D44\u91D1\u516B\u5148\u751F");
    testDecode("-with-SUPER-MONKEYS-pc58ag80a8qai00g7n9n", "\u5B89\u5BA4\u5948\u7F8E\u6075-with-SUPER-MONKEYS");
    testDecode("Hello-Another-Way--fc4qua05auwb3674vfr0b", "Hello-Another-Way-\u305D\u308C\u305E\u308C\u306E\u5834\u6240");
    testDecode("2-u9tlzr9756bt3uc0v", "\u3072\u3068\u3064\u5C4B\u6839\u306E\u4E0B2");
    testDecode("MajiKoi5-783gue6qz075azm5e", "Maji\u3067Koi\u3059\u308B5\u79D2\u524D");
    testDecode("de-jg4avhby1noc0d", "\u30D1\u30D5\u30A3\u30FCde\u30EB\u30F3\u30D0");
    testDecode("d9juau41awczczp", "\u305D\u306E\u30B9\u30D4\u30FC\u30C9\u3067");
}

function testDomains() {
    testUnicode("xn--maana-pta.com", "ma\xF1ana.com");
    testUnicode("example.com.", "example.com.");
    testUnicode("xn--bcher-kva.com", "b\xFCcher.com");
    testUnicode("xn--caf-dma.com", "caf\xE9.com");
    testUnicode("xn----dqo34k.com", "\u2603-\u2318.com");
    testUnicode("xn----dqo34kn65z.com", "\uD400\u2603-\u2318.com");
}

function testEmail() {
    testUnicode("\u0434\u0436\u0443\u043C\u043B\u0430@xn--p-8sbkgc5ag7bhce.xn--ba-lmcq", "\u0434\u0436\u0443\u043C\u043B\u0430@\u0434\u0436p\u0443\u043C\u043B\u0430\u0442\u0435\u0441\u0442.b\u0440\u0444a");
}

function testEmoji() {
    testUnicode("xn--ls8h.la", "\uD83D\uDCA9.la");
}

function testHebrew() {
    testDecode("4dbcagdahymbxekheh6e0a7fei0b", "\u05DC\u05DE\u05D4\u05D4\u05DD\u05E4\u05E9\u05D5\u05D8\u05DC\u05D0\u05DE\u05D3\u05D1\u05E8\u05D9\u05DD\u05E2\u05D1\u05E8\u05D9\u05EA");
}

function testHighSurrogateFollowedByAonotherHigh() {
    testUcs2Decode("\uD800\uD800", [0xD800, 0xD800]);
}

function testHighSurrogateFollowedByNonSurrogates() {
    testUcs2Decode("\uD800ab", [55296, 97, 98]);
}

function testHindi() {
    testDecode("i1baa7eci9glrd9b2ae1bj0hfcgg6iyaf8o0a1dig0cd", "\u092F\u0939\u0932\u094B\u0917\u0939\u093F\u0928\u094D\u0926\u0940\u0915\u094D\u092F\u094B\u0902\u0928\u0939\u0940\u0902\u092C\u094B\u0932\u0938\u0915\u0924\u0947\u0939\u0948\u0902");
}

function testJapanese() {
    testDecode("n8jok5ay5dzabd5bym9f0cm5685rrjetr6pdxa", "\u306A\u305C\u307F\u3093\u306A\u65E5\u672C\u8A9E\u3092\u8A71\u3057\u3066\u304F\u308C\u306A\u3044\u306E\u304B");
}

function testKorean() {
    testDecode("989aomsvi5e83db1d2a355cv1e0vak1dwrv93d5xbh15a0dt30a5jpsd879ccm6fea98c", "\uC138\uACC4\uC758\uBAA8\uB4E0\uC0AC\uB78C\uB4E4\uC774\uD55C\uAD6D\uC5B4\uB97C\uC774\uD574\uD55C\uB2E4\uBA74\uC5BC\uB9C8\uB098\uC88B\uC744\uAE4C");
}

function testLongStrAsciiAndNonAsciiChars() {
    testDecode("Willst du die Blthe des frhen, die Frchte des spteren Jahres-x9e96lkal", "Willst du die Bl\xFCthe des fr\xFChen, die Fr\xFCchte des sp\xE4teren Jahres");
}

function testLowSurrogateFollowedByLowSurrogate() {
    testUcs2Decode("\uDC00\uDC00", [0xDC00, 0xDC00]);
}

function testLowSurrogateFollowedByNonSurrogates() {
    testUcs2Decode("\uDC00ab", [56320, 97, 98]);
}

function testMixAsciiAndNonAsciiChars() {
    testDecode("bcher-kva", "b\xFCcher");
}

function testMultipleNonAsciiChars() {
    testDecode("4can8av2009b", "\xFC\xEB\xE4\xF6\u2665");
}

function testNonPrintableAscii() {
    testUnicode("\0\x01\x02foo.bar", "\0\x01\x02foo.bar");
}

function testRussian() {
    testDecode("b1abfaaepdrnnbgefbadotcwatmq2g4l", "\u043F\u043E\u0447\u0435\u043C\u0443\u0436\u0435\u043E\u043D\u0438\u043D\u0435\u0433\u043E\u0432\u043E\u0440\u044F\u0442\u043F\u043E\u0440\u0443\u0441\u0441\u043A\u0438");
}

function testSpanish() {
    testDecode("PorqunopuedensimplementehablarenEspaol-fmd56a", "Porqu\xE9nopuedensimplementehablarenEspa\xF1ol");
}

function testSingleBasicCodePoint() {
    testDecode("Bach-", "Bach");
}

function testSingleNonAschiiChar() {
    testDecode("tda", "\xFC");
}

function testU002EAsSeparator() {
    testIDNA2003("ma\xF1ana\x2Ecom", "xn--maana-pta.com");
}

function testU3002AsSeparator() {
    testIDNA2003("ma\xF1ana\u3002com", "xn--maana-pta.com");
}

function testUFF0EAsSeparator() {
    testIDNA2003("ma\xF1ana\uFF0Ecom", "xn--maana-pta.com");
}

function testUFF61AsSeparator() {
    testIDNA2003("ma\xF1ana\uFF61com", "xn--maana-pta.com");
}

function testUnmatchedHighSurrogate() {
    testUcs2Decode("\uD800\uD834\uDF06\uD800", [0xD800, 0x1D306, 0xD800]);
}

function testUnmatchedLowSurrogate() {
    testUcs2Decode("\uDC00\uD834\uDF06\uDC00", [0xDC00, 0x1D306, 0xDC00]);
}

function testVietnamese() {
    testDecode("TisaohkhngthchnitingVit-kjcr8268qyxafd2f1b9g", "T\u1EA1isaoh\u1ECDkh\xF4ngth\u1EC3ch\u1EC9n\xF3iti\u1EBFngVi\u1EC7t");
}

// Internals

function testDecode(input, output) {
    Assert.deepEqual(Punycode.decode(input), output);
}

function testUcs2Decode(input, output) {
    Assert.deepEqual(Punycode.ucs2Decode(input), output);
}

function testIDNA2003(input, output) {
    Assert.deepEqual(Punycode.toASCII(input), output);
}

function testUnicode(input, output) {
    Assert.deepEqual(Punycode.toUnicode(input), output);
}

// const testData = {
//     'domains': [
//         {
//             'description': 'Non-printable ASCII',
//             'decoded': '\0\x01\x02foo.bar',
//             'encoded': '\0\x01\x02foo.bar'
//         },
//     ],
// };

