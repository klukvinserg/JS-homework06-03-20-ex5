let arr = [];
let countPlus = 0;
let countMinus = 0;
let countNull = 0;
let countEven = 0;
let countOdd = 0;

for (let i = 1; i <= 10; i++) {
  while (true) {
    num = +prompt("Enter number " + i);

    if (!isNaN(num)) {
      break;
    } else {
      alert("Input incorrect");
      continue;
    }
  }

  arr.push(num);
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    countPlus++;
  } else if (arr[i] < 0) {
    countMinus++;
  } else {
    countNull++;
  }

  if (arr[i] % 2 === 0) {
    countEven++;
  } else {
    countOdd++;
  }
}

alert(
  `Number: ${arr}\n\nPlus: ${countPlus}\nMinus: ${countMinus}\nNull: ${countNull}\nEven: ${countEven}\nOdd: ${countOdd}`
);
