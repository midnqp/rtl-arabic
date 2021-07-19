# rtl-arabic

Display arabic text from right to left in console/terminal. It now supports most punctuations (Harakat). I'll add the rest of the features in the future.

# Exposed Functions

- convertSentence

# Example!

```js
const rtlArabic = require("rtl-arabic");
const convertedText = rtlArabic("احبكم");
console.log(convertedText); // احبكم
```

## What's New?

- Fixed the لا || laa character
- Fixed unlinked characters
- Added Harakat Support

# Todo:

- ~~Fix the لا || laa character~~
- ~~Fix unlinked characters~~
- ~~Add Harakat Support~~
- Add Numbers Support
- Display both Arabic and English text correctly
- Support Farsi
- Support Farsi Numbers
- Support English (I couldn't think of a scenario where you'd use that but I'll add it for your convenience!)
- Add options object for flexibility
