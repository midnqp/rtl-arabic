const unicode = [
  { isolated: "ﺁ", start: "ﺁ", middle: "ﺂ", end: "ﺂ" },
  { isolated: "ﺃ", start: "ﺃ", middle: "ﺄ", end: "ﺄ" },
  { isolated: "ﺇ", start: "ﺇ", middle: "ﺈ", end: "ﺈ" },
  { isolated: "ﺍ", start: "ﺍ", middle: "ﺎ", end: "ﺎ" },
  { isolated: "ﺏ", start: "ﺑ", middle: "ﺒ", end: "ﺐ" },
  { isolated: "ﺕ", start: "ﺗ", middle: "ﺘ", end: "ﺖ" },
  { isolated: "ﺙ", start: "ﺛ", middle: "ﺜ", end: "ﺚ" },
  { isolated: "ﺝ", start: "ﺟ", middle: "ﺠ", end: "ﺞ" },
  { isolated: "ﺡ", start: "ﺣ", middle: "ﺤ", end: "ﺢ" },
  { isolated: "ﺥ", start: "ﺧ", middle: "ﺨ", end: "ﺦ" },
  { isolated: "ﺩ", start: "ﺩ", middle: "ﺪ", end: "ﺪ" },
  { isolated: "ﺫ", start: "ﺫ", middle: "ﺬ", end: "ﺬ" },
  { isolated: "ﺭ", start: "ﺭ", middle: "ﺮ", end: "ﺮ" },
  { isolated: "ﺯ", start: "ﺯ", middle: "ﺰ", end: "ﺰ" },
  { isolated: "ﺱ", start: "ﺳ", middle: "ﺴ", end: "ﺲ" },
  { isolated: "ﺵ", start: "ﺷ", middle: "ﺸ", end: "ﺶ" },
  { isolated: "ﺹ", start: "ﺻ", middle: "ﺼ", end: "ﺺ" },
  { isolated: "ﺽ", start: "ﺿ", middle: "ﻀ", end: "ﺾ" },
  { isolated: "ﻁ", start: "ﻃ", middle: "ﻄ", end: "ﻂ" },
  { isolated: "ﻅ", start: "ﻇ", middle: "ﻈ", end: "ﻆ" },
  { isolated: "ﻉ", start: "ﻋ", middle: "ﻌ", end: "ﻊ" },
  { isolated: "ﻍ", start: "ﻏ", middle: "ﻐ", end: "ﻎ" },
  { isolated: "ﻑ", start: "ﻓ", middle: "ﻔ", end: "ﻒ" },
  { isolated: "ﻕ", start: "ﻗ", middle: "ﻘ", end: "ﻖ" },
  { isolated: "ﻙ", start: "ﻛ", middle: "ﻜ", end: "ﻚ" },
  { isolated: "ﻝ", start: "ﻟ", middle: "ﻠ", end: "ﻞ" },
  { isolated: "ﻡ", start: "ﻣ", middle: "ﻤ", end: "ﻢ" },
  { isolated: "ﻥ", start: "ﻧ", middle: "ﻨ", end: "ﻦ" },
  { isolated: "ﻩ", start: "ﻫ", middle: "ﻬ", end: "ﻪ" },
  { isolated: "ﻭ", start: "ﻭ", middle: "ﻮ", end: "ﻮ" },
  { isolated: "ﻱ", start: "ﻳ", middle: "ﻴ", end: "ﻲ" },
  { isolated: "ﺓ", start: "ﺓ", middle: "ﺔ", end: "ﺔ" },
  { isolated: "ﺅ", start: "ﺅ", middle: "ﺆ", end: "ﺆ" },
  { isolated: "ﺉ", start: "ﺋ", middle: "ﺌ", end: "ﺊ" },
  { isolated: "ﻯ", start: "ﻯ", middle: "ﻰ", end: "ﻰ" },
  { isolated: "ﭖ", start: "ﭘ", middle: "ﭙ", end: "ﭗ" },
  { isolated: "ﭺ", start: "ﭼ", middle: "ﭽ", end: "ﭻ" },
  { isolated: "ﮊ", start: "ﮊ", middle: "ﮋ", end: "ﮋ" },
  { isolated: "ﭪ", start: "ﭬ", middle: "ﭭ", end: "ﭫ" },
  { isolated: "ﮒ", start: "ﮔ", middle: "ﮕ", end: "ﮓ" },
  { isolated: "ﭦ", start: "ﭨ", middle: "ﭩ", end: "ﭧ" },
  { isolated: "ﮦ", start: "ﮨ", middle: "ﮩ", end: "ﮧ" },
  { isolated: "ﮮ", start: "ﮰ", middle: "ﮱ", end: "ﮯ" },
  { isolated: "ﯼ", start: "ﯾ", middle: "ﯿ", end: "ﯽ" },
  { isolated: "ﮈ", start: "ﮈ", middle: "ﮉ", end: "ﮉ" },
  { isolated: "ﮌ", start: "ﮌ", middle: "ﮍ", end: "ﮍ" },
  { isolated: "ﯗ", start: "ﯗ", middle: "ﯘ", end: "ﯘ" },
  { isolated: "ﯙ", start: "ﯙ", middle: "ﯚ", end: "ﯚ" },
  { isolated: "ﯛ", start: "ﯛ", middle: "ﯜ", end: "ﯜ" },
  { isolated: "ﮎ", start: "ﮐ", middle: "ﮑ", end: "ﮏ" },
  { isolated: "ﻵ", start: "ﻵ", middle: "ﻶ", end: "ﻶ" },
  { isolated: "ﻷ", start: "ﻷ", middle: "ﻸ", end: "ﻸ" },
  { isolated: "ﻹ", start: "ﻹ", middle: "ﻺ", end: "ﻺ" },
  { isolated: "ﻻ", start: "ﻻ", middle: "ﻼ", end: "ﻼ" },
];

const laaIndex = unicode.length - 1;

var arabic = "آأإابتثجحخدذرزسشصضطظعغفقكلمنهويةؤئىپچژڤگٹہےیڈڑۇۆۈک"; // Arabic letters

function isHarakah(char) {
  const harakat = ["ً", "ٞ"];
  const isHarakah_ = char >= harakat[0] && char <= harakat[1];
  return isHarakah_;
}

function isAlifChar(char) {
  const alifChars = ["آ", "أ", "إ", "ا"];
  const isAlif = alifChars.includes(char);
  return isAlif;
}

function isLamChar(char) {
  const lamChars = ["ل"];
  const isLam = lamChars.includes(char);
  return isLam;
}

function isLinkableAfter(char) {
  const linkableAfterChars =
    "ٹہےڈڑگڤژچپـئؤرلالآىآةوزظشسيبللأاأتنمكطضصثقفغعهخحجدذلإإۇۆۈ";
  return linkableAfterChars.indexOf(char) >= 0;
}
function isLinkableBefore(char) {
  const linkableBeforeChars = "ٹہےگڤچپـئظشسيبلتنمكطضصثقفغعهخحج";
  return linkableBeforeChars.indexOf(char) >= 0;
}

function convertWord(word) {
  const letters = word.split("");
  const word_ = [];
  for (let i = 0; i < letters.length; i++) {
    const char = letters[i];
    const letter = unicode[arabic.indexOf(char)];
    let isLaa = false;
    const isEndOfArray = i === letters.length - 1;
    const isStartOfArray = i === 0;
    // check if its لا
    if (isLamChar(char) && isAlifChar(letters[i + 1])) {
      isLaa = true;
    }
    if (isStartOfArray) {
      if (isLaa) {
        word_.push(unicode[laaIndex].start);
      } else if (!(isLinkableBefore(char) && isLinkableAfter(char))) {
        word_.push(letter.start);
      } else {
        word_.push(letter.start);
      }
    } else if (isEndOfArray) {
      if (isLaa) {
        word_.push(unicode[laaIndex].end);
      } else if (isLinkableAfter(char)) {
        word_.push(letter.end);
      } else {
        word_.push(letter.isolated);
      }
    } else if (isLinkableBefore(char) && isLinkableAfter(char)) {
      if (isLaa) {
        word_.push(unicode[laaIndex].middle);
      } else {
        word_.push(letter.middle);
      }
    }
    if (isLaa) {
      i++;
    }
  }
  return word_.reverse().join("");
}

function rtlConverter(sentence) {
  let words = sentence.split(" ");
  words = words.map((word) => convertWord(word));
  return words.reverse().join(" ");
}

module.exports = rtlConverter;
