function sum(x) {
  let accum = 0
  const summa = (x) => {
    if (typeof x === 'undefined') {
      return accum
    } else {
      accum += Number(x)
      return summa
    }
  }

  return summa(x)
}

// замыкания 

var counter = (function () {
  var count = 0;
  return function () {
    return count++;
  }

}());


// function sum() {
//   var result = 0;

//   for (var i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }

//   console.log(result);
//   return result;

// }

// sum(1, 2, 3, 6);