const fs = require("fs");

const alphabet = JSON.parse(
  fs
    .readFileSync(__dirname + "/alphabet.json", { encoding: "utf-8" })
    .toString()
);

const other = {
  lamAlif: {
    value: "لا",
    unicode: "\uFEFB",
  },
};

function rtlConverter(sentence) {
  const sentence_ = typeof sentence === "string" ? sentence.trim() : false;

  if (sentence_) {
    const words = sentence_.split(" ").map((word) => convertWord(word));
    return words.reverse().join(" ");
  } else {
    console.log("You must provide a string. Received: " + string);
    process.exit();
  }
}

function convertWord(word) {
  let letters = word.split("");
  let word_ = "";
  let add = 1;
  for (let i = 0; i < letters.length; i += add) {
    add = 1;
    let letter = alphabet.filter((l) => l.isolated.value === letters[i])[0];

    // check if its لا
    if (letters[i] === "ل" && letters[i + 1] === "ا") {
      letters.splice(i, 2, other.lamAlif.unicode);
      add = 2;
      continue;
    }

    if (i === 0) {
      let value;
      if (!letter.beginning.unicode) {
        value = letter.isolated.unicode;
      } else {
        value = letter.beginning.unicode;
      }

      letters[i] = value;
      continue;
    }

    if (!letter.middle.unicode) {
      letters[i] = letter.end.unicode;
      continue;
    }

    if (!letter.beginning.unicode) {
      letters[i] = letter.isolated.unicode;
      continue;
    }

    if (letter.isolated.value === "ه") {
      const skip = ["ر", "ز", "ذ", ""];
      if (letters[i - 1] === "ذ") {
        letters[i] = letter.isolated.unicode;
      }
      continue;
    }

    if (i === letters.length - 1) {
      letters[i] = letter.end.unicode;
      continue;
    }

    if (letter.middle.unicode) {
      letters[i] = letter.middle.unicode;
    } else {
      letters[i] = letter.end.unicode;
    }
  }

  return letters.reverse().join("");
}

module.exports = rtlConverter;
