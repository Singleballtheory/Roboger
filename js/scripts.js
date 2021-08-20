function beepBoop(input) {
  const neighbor = "Won't you be my neighbor";
  let output = [];
  for (i = 0; i <= input; i++){
    if (input === 3) {
      return output.replace(3, neighbor);
    }
    output.push(i);
  }
  return output
}
