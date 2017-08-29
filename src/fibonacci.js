//very heavy time complexit, 0^n because 2 recursions in each function
//it takes the previous two numbers of the position and adds them, and keeps going backwards until it gets to 2 (because then we return 1, and it completes the stack to get the full equation of where we should be)

function fibonacci(position){
  if(position < 3) return 1
  else return fibonacci(position -1) + fibonacci(position-2)
}

fibonacci(6)

//Memoized Fibonacci
//instead of calculating the full stack until the position we pass in a cache into an array, so we just do that recursive calculation once per turn
function fibMemo(position, cache){
  cache = cache || []
  if (cache[position]) return cache[position]
  else {
    if(position < 3) return 1
    else {
      cache[position] = fibMemo(position -1, cache) + fibMemo(position -2, cache)
    }
  }
  return cache[position]
}

fibMemo(1150)
