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

  // Alef chars
  static alefChars = "آأإا";

  constructor(string) {
    super(string);

    this.left = this.isLeft();
    this.right = this.isRight();
    this.rightOnly = this.isRightOnly();
    this.leftOnly = this.isLeftOnly();
    this.both = this.isMiddle();
  }

  isAlefChar() {
    return RTLChar.alefChars.indexOf(this) >= 0;
  }

  isMiddle() {
    return this.isRight(this) && this.isLeft(this);
  }

  isRightOnly() {
    return !this.isLeft(this) && this.isRight(this);
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
    // Handle single character
    if (!charBefore && !charAfter) return ISOLATED;

    // Handle first character
    if (!charBefore) {
      if (charAfter.right && this.left) return START;
      return ISOLATED;
    }

    // Handle last character
    if (!charAfter) {
      if (this.right && charBefore.left) return END;
      return ISOLATED;
    }

    // Handle character in middle

    // Handle character that can connect to both ends
    if (this.both) {
      if (charBefore.left && charAfter.right) return MIDDLE;
      if (charBefore.left && !charAfter.right) return END;
      if (!charBefore.left && charAfter.right) return START;
      return ISOLATED;
    }

    // Handle character that can connect to right only
    if (this.rightOnly) {
      if (charBefore.left) return END;
    }

    // Handle character that can connect to left only
    if (this.leftOnly) {
      if (charAfter.right) return START;
    }

    return ISOLATED;
  }
}

module.exports = RTLChar;
