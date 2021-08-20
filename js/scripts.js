function beepBoop(input) {
  let output = []
  for (i = 0; i <= input; i++){
    if (i === 3) {
      output.push("Won't you be my neighbor?");
    } else {
    output.push(i);
    }
  }
  return output
}
