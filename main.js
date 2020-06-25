/******************
 * YOUR CODE HERE *
 ******************/
getFirstItemFrom = (arr) => {
  return arr[0];
}

getLastItemFrom = (arr) => {
  return arr[arr.length -1];
}

getIndex3 = (arr) => {
  if(arr.length === 5) {
    return arr[3]
  } else {
    return arr[arr.length -1];
  }
}

isLongList = (arr) => {
  if (arr.length >= 11 || arr.length === 10) {
    return true;
  } else if (arr.length < 10) {
    return false;
  }
}

firstItemIsNumber = (arr) => {
  if (typeof arr[0] === 'number') {
    return true;
  } if (typeof arr[0] === 'string' || typeof arr[0] === 'boolean') {
    return false;
  } if (arr[0] === arr.isArray([1, 2, 3])) {
return false
  }
}

secondCharOfThirdString = (char) => {
  console.log(char)
  return char[2][1]
}











/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
