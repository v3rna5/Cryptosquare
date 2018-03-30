
$(document).ready(function() {

  var puzzleText = $("#puzzle").text();
  console.log(puzzleText);
  var vowels = ["a", "e", "i", "o", "u"]
  var arr = puzzleText.split("");
  // var newText = [];


console.log(arr)
  for (var i = 0; i < arr.length; i++) { //separates each letter of text
    for (var j =0; j < vowels.length; j++) { //separates each vowel in the vowel-array
      if (arr[i] == vowels[j]) { //if a particular element of 'arr' == a particular element of 'vowels'
        arr[i]='-'; //Set the array value at I to '-'
      }
    }
  }
    $("#dash").text(arr.join("")); //display each element of array w/o commas, .join = telling jquery not to display commas
    $("#dash").append(arr); //display each element of array w/o commas more implicit
  console.log(arr);
});
