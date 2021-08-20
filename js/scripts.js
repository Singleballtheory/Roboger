function beepBoop(input) {
  let output = []
  for (i = 0; i <= input; i++){
    output.push(i);
  }
  return output
}

function beepBoop() {
  const neighbor = "Won't you be my neighbor?";
  let stringInput = input.split("");
  let output = [];
  stringInput.forEach(function() {
    if (stringInput.includes(neighbor)) {
      output.push("Won't you be my neighbor?");
    } else {
      output.push(i);
    }
  });
}



function beepBoop(input) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const inputArray = input.split();
  let output = [];
  inputArray.forEach(function(number) {
    if (numbers.includes(number)) {
      output.push("Won't you be my neighbor?");
    }
  });
}
const finalOutput = output.join("");