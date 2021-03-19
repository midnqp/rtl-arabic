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


# Todo:
  - Add punctuation support
  - Fix unlinked letters
