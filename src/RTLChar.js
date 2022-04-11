// Character positions
const ISOLATED = 0;
const START = 1;
const MIDDLE = 2;
const END = 3;

class RTLChar extends String {
  // Characters that get connected from the right
  static rightChars = "ـئؤرلالآىآةوزظشسيبللأاأتنمكطضصثقفغعهخحجدذلإإ";

  // Characters that get connected from the left
  static leftChars = "ـئظشسيبلتنمكطضصثقفغعهخحج";

  // Brackets
  static brackets = "{}()";

  // Harakat
  static harakat = "ًٌٍَُِّْْ";

  // Sybmols
  static symbols = "ًٌٍَُِّـ.،؟ @#$%^&*-+|/=~(){}ْ,";

  constructor(string) {
    super(string);

    this.left = this.isLeft();
    this.right = this.isRight();
    this.rightOnly = this.isRightOnly();
    this.leftOnly = this.isLeftOnly();
    this.both = this.isMiddle();
  }

  isMiddle() {
    return this.isRight(this) && this.isLeft(this);
  }

  isRightOnly() {
    return this.isLeft(this) && !this.isRight(this);
  }

  isLeftOnly() {
    return this.isRight(this) && !this.isLeft(this);
  }

  isIsolated() {
    return !isRight(this) && !this.isLeft();
  }

  isLeft() {
    return RTLChar.leftChars.indexOf(this) >= 0;
  }

  isRight() {
    return RTLChar.rightChars.indexOf(this) >= 0;
  }

  isBracket() {
    return RTLChar.brackets.indexOf(this) >= 0;
  }

  isHaraka() {
    return RTLChar.harakat.indexOf(this) >= 0;
  }

  isEOL() {
    return "\n\r".indexOf(this) >= 0;
  }

  isSymbol() {
    return RTLChar.symbols.indexOf(this) >= 0;
  }

  toBracket() {
    let bracketIndex = RTLChar.brackets.indexOf(char);
    if (bracketIndex >= 0) {
      if (bracketIndex % 2 == 0) {
        bracketIndex++;
      } else {
        bracketIndex--;
      }
    }
    return RTLChar.brackets[bracketIndex];
  }

  getPos(charBefore, charAfter) {
    // If there's no character before but there's a character
    // after
    if (!charBefore && charAfter) {
      // If can connect to character after
      if (this.left) {
        // If the character after can connect to one before it
        if (charAfter.right) {
          return START;
        }
      }

      return ISOLATED;
    }

    // If there's no character after but there's a character before
    if (!charAfter && charBefore) {
      // If current character can connect to character before it
      if (this.right) {
        // If character before it can connect to characters after it
        if (charBefore.left) {
          return END;
        }
      }

      return ISOLATED;
    }

    // If there's a character after and before
    // If current character can connect to characters before it and after it
    if (this.both) {
      // Check if character before it and after it can connect to it
      if (charBefore.left && charAfter.right) {
        return MIDDLE;
      }

      // If character before it can't connect to it
      // and the character after it can connect to it
      if (!charBefore.left && charAfter.right) {
        return START;
      } else {
        // If character after it can't connect to
        // but the one before it can
        return END;
      }

      // If both characters before it and after it can't connect to it
      return ISOLATED;
    }

    // If can connect to only characters after it
    if (this.leftOnly) {
      // Check if character after it can connect to it
      if (charAfter && charAfter.right) {
        return START;
      }

      return ISOLATED;
    }

    // If can connect to only characters before it
    if (this.rightOnly) {
      // Check if character before it can connect to it
      if (charBefore && charBefore.left) {
        return END;
      }

      return ISOLATED;
    }
  }
}

module.exports = RTLChar;
