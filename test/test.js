const assert = require("assert");
const RTLArabic = require("../src/RTLArabic");

describe("Numbers", function () {
  it("should convert English numbers to Arabic", function () {
    const before = "Hello 123";
    const after = new RTLArabic(before, { numbers: true }).convert();
    assert.equal(after, "Hello ١٢٣");
  });
});

describe("Harakat", function () {
  it("should display harakat correctly", function () {
    const before = "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ";
    const after = new RTLArabic(before, { harakat: true }).convert();
    const expected = "ِﻢْﻴِﺣَّﺮﻟﺍ ِﻥٰﻢْﺣَّﺮﻟﺍ ِﻪﻠﻟﺍ ِﻢْﺴِﺑ";
    assert.equal(after, expected);
  });
});

describe("Brackets", function () {
  it("should display brackets correctly", function () {
    const before = "Hello, 123 {}[] اليوم";
    const after = new RTLArabic(before).convert();
    const expected = "ﻡﻮﻴﻟﺍ Hello, 123 {}[]";
    assert.equal(after, expected);
  });
});

describe("Arabic and English", function () {
  it("should display space between English and Arabic text properly", function () {
    const before = "Hello, السلام عليكم";
    const after = new RTLArabic(before).convert();
    const expected = "ﻢﻜﻴﻠﻋ ﻡﻼﺴﻟﺍ Hello,";
    assert.equal(after, expected);
  });
});

describe("Farsi", function () {
  it("should support farsi", function () {
    const before = "به خانه خوش آمدی";
    const after = new RTLArabic(before).convert();
    const expected = "یﺪﻣﺁ ﺵﻮﺧ ﻪﻧﺎﺧ ﻪﺑ";
    assert.equal(after, expected);
  });
});
