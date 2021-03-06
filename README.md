# _Beep-Boop Project_

#### _Looping/Arrays Project for week three of epicodus, 01.24.2020_

#### By _**Drake Wilcox**_

## Description

_This web-based program is an exercise in using Arrays and Loops in Javascript. The goal of the project was to create a program that took a numeric input and responded with the results that are specified in the specs listed below. This was acheived by writing a function that replaced digits containing 1,2, and 3 with particular phrases, and also gave priority to particular functions in numbers that contained more than one of the targeted numbers._ 

## Setup/Installation Requirements

* _To open project, download a .zip file by clicking the "clone or download" button on the repository page._ 
* _Open the folder after uncompressing the file, and click the index.html link to open in the browser._
* _To open via a Command Line Interface, use the folliwing instructions:_
* _On a mac, open the terminal and run the following commands from you home directory to clone and open the repository._ 
* _cd desktop_
* _git clone https://github.com/drakewilcox/Beep-Boop-Project3_
* _cd Beep-Boop-Project3_
* _open index.html_


## Specifications

                                                                        
| Behavior                                                                           |Input               |Output                           |
|------------------------------------------------------------------------------------|--------------------|---------------------------------|             
|The input of a number should count from 0 to the entered number value               | 4                  |0,1,2,3,4                        |
|Digits containing the number 1 should be replaced with "Beep!"                      | 3                  |0,Beep!,2,3                      |
|Digits containing number 2 should be replace with "Boop!"                           | 3                  |0,Beep!,Boop!,2,3                |
|Digits containing the number 3 should be replaced with "I'm sorry Dave..."          | 3                  |0,Beep!,Boop!,2,"Im Sorry Dave.."|       
|A number containing a 3 and a 1 or 2 should be replaced with "I'm sorry Dave..."     | 13                 |...9, Beep, Beep, Boop, I'm sorry Dave.."|
|A number containing a 2 and a 1 should be replace with Boop!                        | 12                 |...9,Beep,Beep,Boop              |
|When a user enters a new result, the previous results are hidden.                   | second click       | only show results that apply to new number   |                                   
## Known Bugs

_No known bugs at this time_

## Support and contact details

* _Drake Wilcox_
* _drakewilcox@gmail.com_

## Technologies Used

* _Javascript_
* _jQuery_
* _HTML_
* _CSS_
* _Bootstrap_

### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **Drake Wilcox**