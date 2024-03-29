# rtl-arabic

Display arabic text from right to left in console/terminal or browser. It now supports Harakat, Symbols, English, Arabic Numbers, and Farsi.

# What is this for?

This library is created to help arab programmers to display the Arabic text correctly in the applications that don't support the Arabic language such as in the command prompt or linux terminals and many other applications.

# How does it work?

Sure, most applications don't support the Arabic language, but they support the Unicode. But, most of the western languages are written from left to right, so that's why you find the Arabic text gets displayed in reverse in most terminals. So, all we need is a library that would organize the characters such that they get displayed in the correct way and this is what this library is for.

# What are the features of this library?

- Does not need fonts to support it
- Supports Arabic
  - Letters
  - Numbers & Conversion
  - Symbols
  - Harakat
- Supports English
  - Letters
  - Numbers
  - Symbols
- Supports Farsi
  - Numbers & Conversion
  - Letters
  - Harakat
  - Symbols
- Can be used in a browser
- All it needs is an application that supports unicode 😊

# Examples

```js
const RTLArabic = require("rtl-arabic");

// These are the default options
const options = {
  harakat: true,
  numbers: false,
  multiline: true,
};

let convertedText = new RTLArabic("احبكم", options).convert();
console.log(convertedText); // احبكم

// Convert English numbers to Arabic
convertedText = new RTLArabic("السلام عليكم - 2022", {
  numbers: true,
}).convert();
console.log(convertedText); // السلام عليكم - ٢٠٢٢

// Check if text is Arabic
const isArabic = RTLArabic.isArabic("كيف الحال؟");
if (isArabic) {
  // Do something
  console.log("The text is indeed Arabic");
}
```

# Options

| Option    |                 Description                 | Default Value |    Type |
| :-------- | :-----------------------------------------: | ------------: | ------: |
| harakat   |           Enable harakat support            |          True | Boolean |
| multiline |          Enable multiline support           |          True | Boolean |
| numbers   | Enable English to Arabic numbers conversion |         False | Boolean |

# Tests

```js
npm test
```

# Console App Example

```js
const RTLArabic = require("rtl-arabic");

console.log("Enter something:");

// Tell the input stream we're ready to start reading
process.stdin.resume();

// Set the default encoding
process.stdin.setEncoding("utf8");

// Ouput the transformed data as it comes in chunks
process.stdin.on("data", function (text) {
  // Check if text is Arabic
  if (RTLArabic.isArabic(text)) {
    const convertedText = new RTLArabic(text, {
      numbers: true,
      multiline: false,
    }).convert();
    process.stdout.write(convertedText);
    return;
  }

  process.stdout.write(text.toUpperCase());
});
```

## What's New?

- Fixed the لا || laa character
- Fixed unlinked characters
- Added Harakat Support
- Added English Support
- Added Arabic Numbers Support
- Added Symbols Support
- Added Farsi Support
- Displays Arabic and English Text Properly
- Check if text is Arabic

# Todo:

- ~~Fix the لا || laa character~~
- ~~Fix unlinked characters~~
- ~~Add Harakat Support~~
- ~~Add Numbers Support~~
- ~~Display both Arabic and English text correctly~~
- ~~Support Farsi~~
- ~~Support Farsi Numbers~~
- ~~Support English (I couldn't think of a scenario where you'd use that but I'll add it for your convenience!)~~
- ~~Add options object for flexibility~~
