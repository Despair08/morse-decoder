const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let finalArr = [];
  let letterArr = [];
  let symbolArr = [];
  let wordArr = [];
  let spacedString = "";
  for (let i = 0; i < expr.length; i += 10) {
    letterArr.push(`${expr.substring(i, i + 10)} `);
  }
  letterArr.forEach((item) => {
    if (item != "********** ") {
      for (let i = 0; i < item.length; i += 2) {
        symbolArr.push(item.substring(i, i + 2));
      }
    } else {
      symbolArr.push("* ");
    }
  });
  symbolArr.forEach((item, i) => {
    if (item == "00") {
      symbolArr.splice(i, 1, "");
    } else if (item == "10") {
      symbolArr.splice(i, 1, ".");
    } else if (item == "11") {
      symbolArr.splice(i, 1, "-");
    }
  });
  symbolArr.forEach((item) => {
    if (item != "") {
      spacedString += item;
    }
  });

  wordArr = spacedString.split(" ");
  wordArr.forEach((item) => {
    if (item != "*") {
      for (const [key, value] of Object.entries(MORSE_TABLE)) {
        if (item === key) {
          finalArr.push(value);
        }
      }
    } else if (item === "*") {
      finalArr.push(" ");
    }
  });

  return (result = finalArr.join(""));
}

module.exports = {
  decode,
};
