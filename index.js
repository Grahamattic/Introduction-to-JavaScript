/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

    const votingAge = 15;

    if (votingAge > 18) {
        console.log(true);
        }

    else {
        console.log(false);
    }


/* Task b: declare a variable and then use a conditional to change the value of that variable based on the value
assigned to a second variable (no function required) */

    var calorieIntake = 100
    const maxMealCalories = 500

    if (calorieIntake >= maxMealCalories) {

        calorieIntake = calorieIntake - maxMealCalories;
        console.log(`You are ${calorieIntake} calories over the meal calorie limit.`)
    }

    else if (calorieIntake < maxMealCalories) {
        calorieIntake = maxMealCalories - calorieIntake;
        console.log(`You are ${calorieIntake} calories under the meal calorie limit.`)
    }


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

    var convertString = parseInt("1999");


//Task d: Write a function to multiply a*b 

    function multiply(a,b) { 

        console.log(a * b);
    }

    multiply(2,3); 


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal
//to seven dog years 

    const myAge = 43;

    function myAgeInDogYears() { 

        let dogYears = myAge * 7;
        console.log(`I am ${dogYears} years old in dog years.`);
    }

    myAgeInDogYears(); 


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number
//of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations
// are correct your result should be 0.44999999999999996
  
    function dogFeeder(age,lbs) { 

        if (age >= 1) {

            if (lbs <= 5) {
                let feedDog = lbs * .05;
                console.log(`Feed the dog ${feedDog} pounds of food.`);
            }

            else if ((lbs >= 6) && (lbs <= 10)) {
                let feedDog = lbs * .04;
                console.log(`Feed the dog ${feedDog} pounds of food.`);
            }

            else if ((lbs >= 11) && (lbs <= 15)) {
                let feedDog = lbs * .03;
                console.log(`Feed the dog ${feedDog} pounds of food.`);
            }

            else if (lbs >= 15) {
                let feedDog = lbs * .02;
                console.log(`Feed the dog ${feedDog} pounds of food.`);
            }
        }

        if (age < 1) {

            if ((age >= 0.1666666666666667) && (age <= 0.3333333333333333)) {
                let feedPuppy = lbs * .10;
                console.log(`Feed the puppy ${feedDog} pounds of food.`);
            }

            else if ((age >= 0.3333333333333333) && (age <= 0.5833333333333333)) {
                let feedPuppy = lbs * .05;
                console.log(`Feed the puppy ${feedDog} pounds of food.`);
            }

            else if ((age >= 0.5833333333333333) && (age < 1)) {
                let feedPuppy = lbs * .04;
                console.log(`Feed the puppy ${feedDog} pounds of food.`);
            }
        }
    }

    dogFeeder(1,15); 


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you
// have not played before).
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

    function rockPaperScissors(userChoice) {

        // Define the computer choice
        var userChoice;
        var computerChoice = Math.round(Math.random());

        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } 
        else if(computerChoice <= 0.67) {
            computerChoice = "paper";
        } 
        else {
            computerChoice = "scissors";
        }

        // Compare the computer's choice to the user's choice.
        if (computerChoice === userChoice) {
            console.log(`You chose ${userChoice}. The computer's choice is also ${computerChoice}. It's a tie.`);
        }

        else if ((computerChoice === "rock") && (userChoice === "paper")) {
            console.log(`You chose ${userChoice}. The computer's choice is ${computerChoice}. Paper wraps rock. You won!`);
        }
        else if ((computerChoice === "rock") && (userChoice === "scissors")) {
            console.log(`You chose ${userChoice}. The computer's choice is ${computerChoice}. Rock smashes scissors. You lost.`);
        }
        else if ((computerChoice === "paper") && (userChoice === "rock")) {
            console.log(`You chose ${userChoice}. The computer's choice is ${computerChoice}. Paper wraps rock. You won!`);
        }
        else if ((computerChoice === "paper") && (userChoice === "scissors")) {
            console.log(`You chose ${userChoice}. The computer's choice is ${computerChoice}. Scissors cut paper. You won!`);
        }
        else if ((computerChoice === "scissors") && (userChoice === "rock")) { 
            console.log(`You chose ${userChoice}. The computer's choice is ${computerChoice}. Rock smashes scissors. You won!`);
        }
        else if ((computerChoice === "scissors") && (userChoice === "paper")) {
            console.log(`You chose ${userChoice}. The computer's choice is ${computerChoice}. Scissors cut paper. You lost.`);
        }
    }

    rockPaperScissors("scissors");


/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

    function kilometersToMiles(kilometers) {
        let miles = kilometers / 1.60934;
        console.log(miles);
    }

    kilometersToMiles(10);


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
    function feetToCentimeters(feet) {
        let centimeters = feet / 30.48;
        console.log(centimeters);
    }

    feetToCentimeters(10);


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number)
// bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of
// soda on the wall`
  
    function annoyingSong (repeat) {

        // Decrement count of soda bottles beginning with passed in "repeat" value.
        for (let i = repeat; repeat >= 1; repeat--) {
            let sodaLeft = repeat - 1;
            console.log(`${repeat} bottles of soda on the wall, ${repeat} bottles of soda, take one down pass it around,
            ${sodaLeft} bottles of soda on the wall`);
        }
    }
    
    annoyingSong(10);


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
    function gradeCalculator(points) {

        // Set grades in the 90s to A.
        if (points >= 90) {
            let grade = "A";
            console.log(`This student's grade is ${grade}.`)
        }

        // Set grades in the 80s to B.
        else if ((points >= 80) && (points < 90)) {
            let grade = "B";
            console.log(`This student's grade is ${grade}.`)
        }

        //Set grades in the 70s to C.
        else if ((points >= 70) && (points < 80)) {
            let grade = "C";
            console.log(`This student's grade is ${grade}.`)
        }

        // Set grades in the 60s to D.
        else if ((points >= 60) && (points < 70)) {
            let grade = "D";
            console.log(`This student's grade is ${grade}.`)
        }

        // Set grades below 60 to F.
        else if (points < 60) {
            let grade = "F";
            console.log(`This student's grade is ${grade}.`)
        }
    }
    
    gradeCalculator(99);


/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and
// uncapitalizedvowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

    function vowelCounter(str) {

        const vowelList = "aeiouyAEIOUY";
        let vowelCount = 0;

        // Mold the passed str into an array.
        let string = Array.from(str);

        // Count the number of variables in array called string.
        for (i = 0; i < string.length; i++) {

            if (vowelList.indexOf(string[i]) !== -1) {
                vowelCount += 1;
                console.log(vowelCount);
            }
        }
    }

vowelCounter("aEioUy");


/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Scissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

function rockPaperScissors(userChoice) {

    // Get a choice from the user.
    var userChoice = prompt("Enter your choice: rock, paper, or scissors");

    // Define the computer's choice.
    var computerChoice = Math.round(Math.random());

    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } 
    else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } 
    else {
        computerChoice = "scissors";
    }

    // Compare the computer's choice to the user's choice.
    if (computerChoice === userChoice) {
        console.log(`You chose ${userChoice}. The computer's choice is also ${computerChoice}. It's a tie.`);
    }
    else if ((computerChoice === "rock") && (userChoice === "paper")) {
        console.log(`You chose ${userChoice}. The computer's choice is ${computerChoice}. Paper wraps rock. You won!`);
    }
    else if ((computerChoice === "rock") && (userChoice === "scissors")) {
        console.log(`You chose ${userChoice}. The computer's choice is ${computerChoice}. Rock smashes scissors. You lost.`);
    }
    else if ((computerChoice === "paper") && (userChoice === "rock")) {
        console.log(`You chose ${userChoice}. The computer's choice is ${computerChoice}. Paper wraps rock. You won!`);
    }
    else if ((computerChoice === "paper") && (userChoice === "scissors")) {
        console.log(`You chose ${userChoice}. The computer's choice is ${computerChoice}. Scissors cut paper. You won!`);
    }
    else if ((computerChoice === "scissors") && (userChoice === "rock")) { 
        console.log(`You chose ${userChoice}. The computer's choice is ${computerChoice}. Rock smashes scissors. You won!`);
    }
    else if ((computerChoice === "scissors") && (userChoice === "paper")) {
        console.log(`You chose ${userChoice}. The computer's choice is ${computerChoice}. Scissors cut paper. You lost.`);
    }
}

rockPaperScissors();



