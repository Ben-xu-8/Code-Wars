// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowelsCount = 0;
    
    // enter your magic here
    let regExp = /[aeiou]/gi
    let vowels = str.match(regExp)
    if (vowels){
      vowelsCount = vowels.length
      return vowelsCount
    }
    else{
      return vowelsCount = 0
    }
  }