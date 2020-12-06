// 1. Write a function that takes in an array of numbers and returns its sum.

// # 1. Write a function that takes in an array of numbers and returns its sum.
// def sum(numbers)
//   result = 0
//   index = 0
//   while index < numbers.length
//     result += numbers[index]
//     index += 1
//   end
//   result
// end

// function computeSum(numbers) {
//   var sum = 0;
//   numbers.forEach(function (number) {
//     sum += number;
//   });
//   return sum;
// }
// console.log(computeSum([5, 3, 7]));

// 2. Write a function that takes in an array of strings and returns the smallest string.

// function smallestString(strings) {
//   var index = 0;
//   var shortest = strings[0];
//   while (index < strings.length) {
//     if (index.length < shortest.length) {
//       console.log(shortest);
//     }
//     index++;
//   }
// }
// console.log(smallestString(["sad", "happy", "angry", "joyous", "ok"]));

function smallestString(strings) {
  var index = 0;
  var shortest = strings[0];
  strings.forEach(function (strings) {
    if (index.length < shortest.length) {
      console.log(index);
    }
    index++;
  });

}
console.log(smallestString(["sad", "happy", "angry", "joyous", "ok"]));


// 3. Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.


// 4. Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.


// 5. Write a function that takes in an array of strings and joins them together to make a single string separated by commas.


// 6. Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).


// 7. Write a function that takes in an array of numbers and returns the two smallest numbers.


// 8. Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.


// 9. Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.


// 10. Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.


