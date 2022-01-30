function pickIt(arr){
  var odd=[],even=[];
  //coding here

  for ( i of arr) {
    if (i % 2 === 0) {
      even.push(i);
} else {
  odd.push(i);
}
}
  
  return [odd,even];
}