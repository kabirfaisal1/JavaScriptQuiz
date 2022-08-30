# JSFundamentals
Working on a application that build a timed coding quiz with multiple-choice questions for javascript. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code and store users score in localStorage.

# Application criteria
1. User will take a five (5) question javascript quiz
2. score need to be 100 * score / # questions
3. able to store user initials and score in localStorage

# Folder structure 
1. root will have 'index.html' file which will be the main application
2. cssStyle will have 'style.css' file which will controll style and layout web pages
3. jsScript will have 'script.js' file which will controll user interaction and validate the workflow of the application

# How to Open the app
### Key Note
Everytime you run the application, you would need to refresh the screen before clicking on "Generate Password" button. 
 ### URL: 
 ```

 ```

 ### local

 Open terminal
 #### URL
 ```
  open -a 'google chrome' 
 
 ```
 #### clone
 ```
 git clone https://github.com/kabirfaisal1/JavaScriptQuiz.git
 ```
 #### Open index.html
 ```
 open -a 'google chrome' <filepath>/JavaScriptQuiz/index.html
 ```
# User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

# Acceptance Criteria
```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

# Test Case
```
 1. Start the quiz and let the time run out
 2. Get all question correct
 3. Get 2/4 or 3/4 questions correct
 4. Don't make any input on users initials
 5. input vaule on users initials
 6. Click on view high score 
```

## App Screenshots

![Image at start.](./images/screenshots/start.png)

![Image at correct.](./images/screenshots/correct.png)

![Image at wrong.](./images/screenshots/wrong.png)

![Image at submit.](./images/screenshots/submit.png)

![Image viewscore.](./images/screenshots/viewscore.png)

![Image at retake.](./images/screenshots/retake.png)

