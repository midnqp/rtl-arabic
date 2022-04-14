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
  - Numbers
  - Letters
  - Harakat
- Can be used in a browser
- All it needs is an application that supports unicode 😊

# Examples

```js
const RTLArabic = require("rtl-arabic");

const options = {
  harakat: true,
  numbers: false,
};

let convertedText = new RTLArabic("احبكم", options).convert();
console.log(convertedText); // احبكم

// Convert English numbers to Arabic
convertedText = new RTLArabic("السلام عليكم - 2022", {
  numbers: true,
});
console.log(convertedText); // السلام عليكم - ٢٠٢٢
```

# Options

| Option  |                 Description                 | Default Value |    Type |
| :------ | :-----------------------------------------: | ------------: | ------: |
| harakat |           Enable harakat support            |          True | Boolean |
| numbers | Enable English to Arabic numbers conversion |         False | Boolean |

# Tests

```js
npm test
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

This motivates me to keep it updated. (Pull requests are welcome)

<a href="https://www.buymeacoffee.com/drrg" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
