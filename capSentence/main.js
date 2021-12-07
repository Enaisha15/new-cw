function capSentence(text) {
  let theWords = text.lowercase('').split('')
   let capWord = []
  theWords.forEach((results) => {
  capWords.push(results[0].toUpperCase() + results.slice(1));
});
return capWords.join(" ");