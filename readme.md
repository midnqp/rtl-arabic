# rtl-arabic

Display arabic text from right to left in console/terminal. It's doesn't support the letters with punctuations yet. I'll complete it when I get time. The code is not the best but it works for now.

# Exposed Functions

- rtlConverter

# Example!

```js
const rtlConverter = require("rtl-arabic");
const convertedText = rtlConverter("احبكم");
console.log(convertedText); // احبكم
```

## What's New?

- Fixed the لا || laa character
- Fixed unlinked characters

# Todo:

- Add Harakat Support
- Add Numbers Support
- Display both Arabic and English text correctly
- Support Farsi
- Support Farsi Numbers
- Support English (I couldn't think of a scenario where you'd use that but I'll add it for your convenience!)
- Add options object for flexibility
