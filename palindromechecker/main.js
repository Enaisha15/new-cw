function palindromeChecker(text) {
  let test = text.toLowerCase(); 
  return text.split('').reverse().join('') === test ? true : false 
}