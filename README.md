Outline and rules:
Keep the user input and html simple!

UI:
Create an input field that only accepts numeric input or that ignores any non-numeric input
Create an output field that can (potentially) hold extremely large strings to be returned to it

When dealing with multi-digit numbers:
3 anywhere in the number will override a 1 or a 2 and replace the whole number (ex, 13 = "Won't you be ny neighbor?")
2 anywhere will override a 1 and replace the whole number (ex, 21 = "Boop")
1 anywhere will replace the whole number (ex, 15 = "Beep")


Specs:

starting example given --
```
Describe: beepBoop()
Test: "It should return an array with a 0 if the number 0 is inputted"
Code: beepBoop(0);
Expected Output: 0
```
```
Describe: "It Should return an array ranging from 0 to 9 if 9 is inputted"
Code: beepBoop(9)
Expected Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```
```
Describe: beepBoop()
Test: "It should replace 3 with "Won't you be my neighbor?".
Code: beepBoop(3);
Expected Output: 0, 1, 2, Won't you be my neighbor?
```
```
Describe: beepBoop()
Test: "It should replace 2 with "Boop!".
Code: beepBoop(3);
Expected Output: 0, 1, Boop!, Won't you be my neighbor?
```
```
Describe: beepBoop()
Test: "It should replace 1 with "Beep!"
Code: beepBoop(3);
Expected Output: 0, Beep!, Boop!, Won't you be my neighbor?
```
```
Describe: beepBoop()
Test: "It should replace any number that has a 3 at any index point with "Won't you be my neighbor?"
Code: beepBoop(13)
Expected Output: 0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, 10, 11, 12, Won't you be my neighbor?
```
All above specs pass!

Describe: beepBoop()
Test: "It should replace any number that has a 2 at any index point with "Boop!" except for numbers that contain a 3."
Code: beepBoop(23)
Expected Output: 0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, 10, 11, Boop!, Won't you be my neighbor?, 14, 15, 16, 17, 18, 19, Boop!, Boop!, Boop!, Won't you be my neighbor?

Describe: beepBoop()
Test: "It should replace any number that has a 1 at any index point with "Beep!" except for numbers that contain a 3 or a 2."
Code: beepBoop(13)
Expected Output: 0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?


