// Helper function to check for the case os string
function isUpperCase(str) {
  return str === str.toUpperCase();
}

function caesarCipher(s, k) {
  const alph = "abcdefghijklmnopqrstuvwxyz";
  let new_string = []; // array will hold original string chars
  let new_alph = {}; //dictionary to hold ciphered alphabets
  const len_of_alph = alph.length;

  // Loop through the alphabetical letters
  for (let index = 0; index < alph.length; index++) {
    // Initialize and return new char index position and return it's position
    // plus the shift size (k)
    let new_index = 0;
    new_index = alph.indexOf(alph[index]) + k; //shift position of char by k

    // if the new index position is still bigger than the length of the alphabetical
    // letters continue subtracting
    if (new_index < len_of_alph) {
      new_alph[alph[index]] = alph[new_index];
    } else {
      while (new_index >= len_of_alph) {
        new_index -= len_of_alph;
      }
      new_alph[alph[index]] = alph[new_index];
    }
  }

  //   Loop through original string and if the char is in the alphabets retrieve
  //   new char from the alphabetical dictionary
  for (let index = 0; index < s.length; index++) {
    const char = s[index];
    if (alph.includes(char.toLowerCase())) {
      let dict_char = new_alph[char.toLowerCase()];

      // Assign the correct case to char
      dict_char = isUpperCase(char)
        ? dict_char.toUpperCase()
        : dict_char.toLowerCase();
      new_string.push(dict_char);
    } else {
      // Append any other chars in string to the array
      new_string.push(char);
    }
  }
  // Join the chars in the new array and return ciphered string
  //   returns Wkhuh'v-d-vwdupdq-zdlwlqj-lq-wkh-vnb
  return new_string.join("");
}
//Driver code
console.log(caesarCipher("There's-a-starman-waiting-in-the-sky", 3));
