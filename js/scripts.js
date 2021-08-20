function beepBoop(input) {
  let output = []
  for (i = 0; i <= input; i++){
    if (i.toString().includes(3)) {
      output.push("Won't you be my neighbor?");
    } else if (i === 2) {
      output.push("Boop!");
    } else if (i === 1) {
      output.push("Beep!");
    // } else if (i.toString().includes(3)) {
    //   output.push("Won't you be my neighbor?");
    } else {
    output.push(i);
    }
  }
  return output
}
