function whereIBelong(arr, num) {

  var counter = 0
  for (i = 0; i < arr.length; i++) {
      if (num > arr[i]) {
          counter++
      }
  } 

  return counter
}