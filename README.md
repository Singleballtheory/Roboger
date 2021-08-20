Outline and rules:
Keep the user input and html simple!

UI:
Create an input field that only accepts numeric input or that ignores any non-numeric input
Create an output field that can (potentially) hold extremely large strings to be returned to it

Returns a range of numbers from 0 to the inputted number.
Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

When dealing with multi-digit numbers:
3 anywhere in the number will override a 1 or a 2 and replace the whole number (ex, 13 = "Won't you be ny neighbor?")
2 anywhere will override a 1 and replace the whole number (ex, 21 = "Boop")
1 anywhere will replace the whole number (ex, 15 = "Beep")


Specs:

starting example given --

Describe: beepBoop()
Test: "It should return an array with a 0 if the number 0 is inputted"
Code: beepBoop(0);
Expected Output: 0

Describe: "It Should return an array ranging from 0 to 9 if 9 is inputted"
Code: beepBoop(9)
Expected Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

Describe: beepBoop()
Test: "It should replace 3 with "Won't you be my neighbor?".
Code: beepBoop(3);
Expected Output: 0, 1, 2, Won't you be my neighbor?

Describe: beepBoop()
Test: "It should replace 2 with "Boop!".
Code: beepBoop(3);
Expected Output: 0, 1, Boop!, Won't you be my neighbor?

Describe: beepBoop()
Test: "It should replace 1 with "Beep!"
Code: beepBoop(3);
Expected Output: 0, Beep!, Boop!, Won't you be my neighbor?

Describe: beepBoop()
Test: "It should replace any number that has the number 3 with "Won't you be my neighbor?"
Code: beepBoop(13)
Expected Output: 0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, 10, 11, 12, Won't you be my neighbor?