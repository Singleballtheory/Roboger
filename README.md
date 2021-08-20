# _Welcome to the Neighborhood!_

#### _A Mr. Roboger Project_

#### By _**Scott Hutley**_

## Technologies Used

* _html_
* _javascript/jquery_
* _css/bootstrap_
* _TDD_

## Description

_A very simple input/output program. "Welcome" takes a numeric input from the user and for-loops through each number beginning at zero and ending with, well, the number that was put in. If it spots a 1, 2, or 3 at any point in any number, it will replace that particular number with custom text using the following conditions: Any 2 trumps a 1, and any 3 trumps both a 2 AND/OR a 1. Make sense? Well it shouldn't, but that's what this program does. When the for-loop is complete, it will display the ENTIRE list back to the user -- with all the custom text replacements of course!_

## Setup/Installation Requirements

* Clone this repository to an empty folder or to your desktop. Instructions for cloning can be found [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository).
* Navigate to the index.html file within the folder and open with your web browser.

## Known Bugs/Issues

* Currently there is no limit to the size of number that can be input. For the sake of both computing and output length, a number cap will be implemented in the future.

## License

[MIT](https://opensource.org/licenses/MIT)

_Copyright (c) 2021 Scott Hutley_

## Contact Information

_Scott Hutley <scotthutley1@comcast.net>_

ALL SPECS PASS

Specs:
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
```
Describe: beepBoop()
Test: "It should replace any number that has a 2 at any index point with "Boop!" except for numbers that contain a 3."
Code: beepBoop(23)
Expected Output: 0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, 10, 11, Boop!, Won't you be my neighbor?, 14, 15, 16, 17, 18, 19, Boop!, Boop!, Boop!, Won't you be my neighbor?
```
```
Describe: beepBoop()
Test: "It should replace any number that has a 1 at any index point with "Beep!" except for numbers that contain a 3 or a 2."
Code: beepBoop(13)
Expected Output: 0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?
```

