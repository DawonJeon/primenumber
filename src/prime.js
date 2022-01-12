
export const solution = (n) => {
    return (n <= 1) ? '소수가 아닙니다' : prime(n); 
}


export const prime = (n) => {
    let notPrime=[]
    let Prime = []
    for (let i = 2; i < n; i++) {
    let newarray = [];
      for (let j = 2; j < i ; j++) {
          if ( i % j === 0 ) {
            newarray.push(0)
          } 
      } newarray.includes(0,0) ? notPrime.push(i) : Prime.push(i) 
  }
  return Prime.length;
}

console.log(prime(10000))

// export const prime = (input) => {
//     const IsPrimes = [];
//     for(let i = 2; i < input; i++) {
//         IsPrimes.push(i) }
//     return IsPrimes;
//     }
/*
export const prime = (input) => {
    const IsPrimes = [];
    const NotPrimes = [];
    for(let i = 2; i < input; i++) {
        for (let j = 2; j < i ; j++) {
            if ( i % j === 0 ) {
                NotPrimes.push(i)
            } 
        } IsPrimes.push(i)
    } return IsPrimes
}
*/
