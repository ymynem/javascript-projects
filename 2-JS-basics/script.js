/*
*   Exercise 1
*
* */
function calculateBMI() {
    let bmiJhon, bmiMark, markMass, jhonMass, markHeight, jhonHeight, greater;
    markMass = prompt("What is your mass Mark");
    jhonMass = prompt("What is your mass Jhon");

    markHeight = prompt("What is your height Mark");
    jhonHeight = prompt("What is your height John");

    bmiMark = markMass / markHeight ** 2;
    bmiJhon = jhonMass / jhonHeight ** 2;


    console.log('Marks BMI is: ' + bmiMark);
    console.log('Johns BMI is33: ' + bmiJhon);

    greater = bmiMark > bmiJhon;

    console.log("Is Marks BMI greater than Johns? " + greater);
}

//calculateBMI();
//***********************************************************************************************************************
//***********************************************************************************************************************
//***********************************************************************************************************************

/*
*   Exercise 2
*
* */

/*
*  Latest 3 games, Johns team scored 89, 120 and 103 points.
*  Latest 3 games, Mikes team scored 116, 94, and 123 points.
*  1- Calculate the average score for each team,
*  2- Decide which team wins in average (highest average score), and print the winner to thr console.
*  Also include the average score in the output.
*  3- Then change the scores to show different winners. Don't forget to take into account there might be a draw
*     (the same average score).
*  4- Extra: Mary also plays basketball, and her team scored 97, 134, 105 points.
*  Like before, log the average winner to the console.
*  5- Like before, change the scores to generate different winners, keeping in mind there might be draws.
* */


function calculateAverageScore(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}


/*
*  Latest 3 games, Johns team scored 89, 120 and 103 points.
*  Latest 3 games, Mikes team scored 116, 94, and 123 points.
*  Extra: Mary also plays basketball, and her team scored 97, 134, 105 points.
*/
function findWinner() {
    let score1 = 89;
    let score2 = 120;
    let score3 = 103;

    let jScore = calculateAverageScore(score1, score2, score3);

    score1 = 116;
    score2 = 94;
    score3 = 123;
    let mScore = calculateAverageScore(score1, score2, score3);

    score1 = 97;
    score2 = 134;
    score3 = 105;
    let maryScore = calculateAverageScore(score1, score2, score3);
    console.log(jScore, mScore, maryScore);
    switch (true) {
        case jScore > mScore && jScore > maryScore:
            console.log('John wins with a score: ' + jScore);
            break;
        case mScore > jScore && mScore > maryScore:
            console.log('Mike wins with a score: ' + mScore);
            break;
        case maryScore > jScore && maryScore > mScore:
            console.log('Mary wins with a score: ' + maryScore);
            break;
        default:
            console.log("No one wins, it is a DRAW")
    }
}

//findWinner();
//***********************************************************************************************************************
//***********************************************************************************************************************
//***********************************************************************************************************************

/*
*   Exercise 3
*
* */

/*
*   John and his family went on a holiday and went to 3 different restaurants. The bills were 124, 48 and 269 dollars.
*   To tip yhe waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20 %
*   of the bill when thw bill is between 50 and 200 dollars, and 10 % when the ill is more than 200 dollars.
*
*   In the end, John would like to have 2 arrays:
*   1) Containing all three tips (one for each bill)
*   2) Containing all three final paid amounts (bill + tip).
*
*   (NOTE: To calculate 20 % of a value, simply multiply if with 20/100 = 0.2).
*
* */

function calculateAmountToTip(amount) {
    switch (true) {
        case amount < 50:
            return amount * 0.2;
        case amount >= 50 && amount <= 200:
            return amount * 0.15;
        case amount > 200:
            return amount * 0.1;
        default:
            return 0;
    }
}

function calculateAmountToPay(amount, tip) {
    return amount + tip;
}

function biller() {
    let bills = [124, 48, 269];
    let tips = [];
    let paidAmounts = [];

    for(let i=0; i < bills.length; i++ ){
        let tip = calculateAmountToTip(bills[i]);
        let totAmount = calculateAmountToPay(bills[i], tip);
        tips.push(tip);
        paidAmounts.push(totAmount);
    }
    console.log(tips);
    console.log(paidAmounts);
}
//biller();
//**********************************************************************************************************************
//**********************************************************************************************************************
//**********************************************************************************************************************

/*
*   Exercise 4
*
* */

/*
*   Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement
*   the same functionality with objects and methods.
*   1- For each of them, create an object with properties for their full name, mass, and height.
*   2- Then, add a method to each object to calculate the BMI. Save them BMI to the object and also return it from
*   the method.
*   3- In the end, log to the console who has the highest BMI, together with the full name and the respective BMI.
*   Don't forget they might have the same BMI.
*
*   Remember BMI = mass / heihj * height.
* */

function BMIcalculator(){
    let john = {
        fullName: 'John Johansson',
        height: 1.95,
        mass: 110,
        bmiCalculator: function () {
           return this.BMI = this.mass/ (this.height * this.height);
        }
    };
    let mark = {
        fullName: 'Mark Marksson',
        height: 1.69,
        mass: 78,
        bmiCalculator: function () {
            return this.BMI = this.mass/(this.height * this.height);
        }
    };

    let markBMI = mark.bmiCalculator();
    let johnBMI = john.bmiCalculator();

    let highestBMI = function(){
        switch(true){
            case markBMI > johnBMI:
                return mark.fullName + ' has higher BMI than John. Marks BMI is: ' + markBMI + " and Johns is: " + johnBMI;
            case markBMI < johnBMI:
                return john.fullName + ' has higher BMI than Mark. Johns BMI is: ' + johnBMI + " and Marks is: " + markBMI;
            default:
                return 'They have equal BMI: Johns BMI: ' + johnBMI + " and Marks is: " + markBMI;
        }

    };

    console.log(highestBMI());


}
//BMIcalculator();



/*
*   Exercise 5
*
* */

/*
*                                               CONTINUED from exercise 3
*   John and his family went on a holiday and went to 5 different restaurants. The bills were 124, 48, 268,
*   180 and 42 dollars.
*   To tip yhe waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20 %
*   of the bill when the bill is less than 50 dollars, 15 % when the bill is between 50 and 200 dollars,
*  and 10 % when the ill is more than 200 dollars.
*
*   Implement a tip calculator using objects and loops:
*   1. Create an object with an array for the bill values.
*   2. Add a method to calculate the tip
*   3. This method should include a loop to iterate over all the paid bills and do the tip calculations
*   4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts
*   (bill + tip).
*   Hint: Start with two empty arrays [] as properties and then fill them up in the loop.
*
*   EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills
*   were 77, 375, 110 and 45 dollars. Mark likes to tip 20 % of the bill when the bill is less than 100 dollars,
*   10 % when the bill is between 100 and 300 dollars, and 25 % if the bill is more than 300 dollar
*   (different than John).
*
*   5. Implement the same functionality as before, this time using Mark's tipping rules.
*   6. Create a function (not a method) to calculate the average of a given array of tips.
*   HINT: loop over the array, and in each iteration store the current sum in a variable (starting
*   from 0). After you have the sum of array, divide it by the number of elements in it (that's how you
*   calculate the average.
*   7. Calculate the average tip for each family
*   8. Log to the console which family paid the highest tip on average.
*
* */
function createBill(bills){
    return {
        bills: bills,
        tipsAmounts: [],
        paidAmounts: [],
        calculateTip: function (name) {
            for (let i = 0; i < this.bills.length; i++) {
                let tipAmount;
                switch(name){
                    case 'john':
                        tipAmount = this.bills[i] * matchJohnTip(this.bills[i]);
                        break;
                    case 'mark':
                        tipAmount = this.bills[i] * matchMarkTip(this.bills[i]);
                        break;
                }

                this.tipsAmounts.push(tipAmount);
                this.paidAmounts.push(this.bills[i] + tipAmount);
            }
        }

    }
}
function matchJohnTip(amount){
    switch(true){
        case amount < 50:
            return .2;
        case amount >= 50 && amount < 200:
            return .15;
        case amount > 200:
            return .10;
        default:
            return 0;
    }
}
function matchMarkTip(amount){
    switch(true){
        case amount < 100:
            return .2;
        case amount >= 100 && amount < 300:
            return .1;
        case amount > 300:
            return .25;
        default:
            return 0;
    }
}

function calculateAverageOftips(tips){
    let averageOfTips = 0;
    for(let i = 0; i < tips.length; i++){
        averageOfTips += tips[i];
    }
    return averageOfTips / tips.length
}
function max(number1, number2){
    return number1 > number2;
}
function mainBills(){
    let johnsBills = [124, 48, 268, 180, 42];
    let marksBills = [77, 475, 110, 45];
    johns = createBill(johnsBills);
    marks = createBill(marksBills);

    johns.calculateTip('john');
    marks.calculateTip('mark');


    console.log("Paid amounts, first Johns then Marks");
    console.log(johns.paidAmounts);
    console.log(marks.paidAmounts);
    console.log("Tips amounts, first Johns then Marks");
    console.log(johns.tipsAmounts);
    console.log(marks.tipsAmounts);


    let johnsAverageTips = calculateAverageOftips(johns.tipsAmounts);
    let marksAverageTips = calculateAverageOftips(marks.tipsAmounts);

    console.log("The Family's average tips starting by showing Johns then Marks: " +
        johnsAverageTips + " " + marksAverageTips);
    if(max(johnsAverageTips, marksAverageTips)){
        console.log("Johsn pays more");
    }else{
        console.log("Mark pays more");
    }
}


mainBills();