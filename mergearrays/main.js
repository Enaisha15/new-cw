function mergeArrays(...arrays) {
  let num = []
  arrays.forEach(  array =>  {
    num = [...num, ...array]
  } ) 
  
  const Set1 = new Set([...num])
  console.log(Array.from(Set1)
  );

  Array.from(Set1);
  
   return Array.from(Set1);
  
  
}