// Complete the solution so that it reverses the string passed into it.

function solution(str){
    let splitStr = str.split("")
    splitStr = splitStr.reverse()
    splitStr = splitStr.join("")
    return splitStr
  }