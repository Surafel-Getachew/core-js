const bob = (s, num) => {
  console.log('bob', s, num);
  console.log('this', this);
  return true;
};

const bill = {
  name: 'Bill Murray',
  movie: 'Lost in translation',
};

// bob("babe",33)
// bob.call(bill,"babe",33)
// bob.apply(bill,["babe",33])

var obj = {
  num: 10,
};

var add = function(num1,num2) {
    let sum = num1 + num2 + this.num
    // console.log("Sum:",sum);
    return sum
}

console.log(add.call(obj,1,2));
nums = [2,2]
console.log(add.apply(obj,nums));
var bound = add.bind(obj)
console.log(bound(2,3));

