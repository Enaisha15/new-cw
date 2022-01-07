function warnTheSheep(queue) {
  let {length} = queue;
  length--;
  if(queue[length] === 'wolf') return "Pls go away and stop eating my sheep";
  for(let i = length; i >= 0; i--){
    if(queue[i] === 'wolf'){
      return `Oi! Sheep number ${length-i}! You are about to be eaten by a wolf!`;
    }
  }
}