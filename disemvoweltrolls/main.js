function disemvowel(str) {
  let newString = ""
  const vowels = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U']
  
  str.split("").forEach((letter) => {
      if (vowels.includes(letter)) return
      else newString += letter
    })
  return newString
}
