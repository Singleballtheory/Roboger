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


