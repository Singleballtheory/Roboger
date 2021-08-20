function beepBoop(input) {
  let output = []
  for (i = 0; i <= input; i++){
    if (i.toString().includes(3)) {
      output.push("Won't you be my neighbor?");
    } else if (i.toString().includes(2)) {
      output.push("Boop!");
    } else if (i.toString().includes(1)) {
      output.push("Beep!");
    } else {
    output.push(i);
    }
  }
  return output
}

$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    const input = parseInt($("input#userInput").val());
    let result = beepBoop(input);

    $("#result").text(result.join(" "));
  });
});