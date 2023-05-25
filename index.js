//////// chapter 5

//Q1
var num1 = +prompt("Enter 1st number for add:");
var num2 = +prompt("Enter 2nd number for add:");
var result = num1 + num2;
console.log(result);

//Q2
var num1 = +prompt("Enter 1st number for sub:");
var num2 = +prompt("Enter 2nd number for sub:");
var result = num1 - num2;
console.log(result);

var num1 = +prompt("Enter 1st number for multiply:");
var num2 = +prompt("Enter 2nd number for multiply:");
var result = num1 * num2;
console.log(result);

var num1 = +prompt("Enter 1st number for division:");
var num2 = +prompt("Enter 2nd number for division:");
var result = num1 / num2;
console.log(result);

var num1 = +prompt("Enter 1st number for modulus:");
var num2 = +prompt("Enter 2nd number for modulus:");
var result = num1 % num2;
console.log(result);

//Q3
//declare a variable
var myNumber = ("5");
//display value in browser after declaration
document.write("initial value:" + myNumber + "<br/>");
//initialize the variable with some number , add 1 to the value
myNumber++;
//display value in browser after increment
document.write("Value after increment is:" + myNumber + "<br/>");
//add 7 to value 
myNumber += 7;
//display value in browser after adding
document.write("Value after addition is:" + myNumber + "<br/>");
//substract 1 from the value 
myNumber--;
//display value in browser after decrement
document.write("Value after decrement is:" + myNumber + "<br/>");
//reminder after dividing the variable's value by 3
myNumber % 3;
//display value in browser after divide
document.write("the reminder is :0 ");

//Q4
var ticket_price = ("600"); //cost of one movie ticket
var num_ticket = ("5"); //number of ticketss
var total_cost = ticket_price * num_ticket; //calculate total cost
console.log(total_cost)
document.write("total cost to buy 5 tickets to a movie is 3000 PKR")

//Q5
document.write("<h3>Table of 4</h3>")
var Table = 4 * 1
console.log(Table)
document.write("4x1=4 <br/>")
var Table = 4 * 2
console.log(Table)
document.write("4x2=8 <br/>")
var Table = 4 * 3
console.log(Table)
document.write("4x3=12 <br/>")
var Table = 4 * 4
console.log(Table)
document.write("4x4=16 <br/>")
var Table = 4 * 5
console.log(Table)
document.write("4x5=20 <br/>")
var Table = 4 * 6
console.log(Table)
document.write("4x6=24 <br/>")
var Table = 4 * 7
console.log(Table)
document.write("4x7=28 <br/>")
var Table = 4 * 8
console.log(Table)
document.write("4x8=32 <br/>")
var Table = 4 * 9
console.log(Table)
document.write("4x9=36 <br/>")
var Table = 4 * 10
console.log(Table)
document.write("4x10=40 <br/>")

//Q6
//convert celsius to fahrenhiet
var celsius = 30;
var fahrenhiet = (celsius * 9 / 5) + 32;
console.log(celsius + "'C is " + fahrenhiet + "'F ");
//convert fahrenhiet to celsius
var fahrenhiet = 80;
var celsius = (fahrenhiet - 32) * 5 / 9;
console.log(fahrenhiet + "'F is " + celsius + "'C ");

//Q7
document.write("<h3>Shopping Cart</h3> ")
var price1 = 650;
console.log(price1)
document.write("price of item 1 is 650<br/>")
var price2 = 100;
console.log(price2)
document.write("price of item 2 is 100<br/>")
var quantity1 = 3;
console.log(quantity1)
document.write("quantity of item 1 is 3<br/>")
var quantity2 = 7;
console.log(quantity2)
document.write("quantity of item 2 is 7<br/>")
var charges = 100;
document.write("shopping charges 100<br/><br/>")

var total1 = price1 * quantity1;
var total2 = price2 * quantity2;
var subtotal = total1 + total2 + charges;
console.log(subtotal)
document.write("the total cost of your order is 2750<br/>")

//Q8
document.write("<h3>Marks Sheet</h3> ")
var total_marks = ("980")
document.write("total marks:" + total_marks + "<br/>")
var obtained_marks = prompt("enter your obtained marks")
document.write("obtained marks:" + obtained_marks + "<br/>")

var percentage = (obtained_marks / total_marks) * 100
document.write("percentage:" + percentage + "<br/>")
console.log(percentage)

//Q9
document.write("<h3>Currency in PKR</h3> ")

var total_usd = 10;
var total_sar = 25;
var usd_to_pKr_rate = 104.80;
var sar_to_pKr_rate = 28;

var total_pkr = (total_usd * usd_to_pKr_rate) + (total_sar * sar_to_pKr_rate)
console.log(total_pkr)
document.write("Total Currency in PKR is : 1748")

//Q10
var num = 10;
var result = ((num + 5) * 10) / 2
console.log(result)

//Q11
document.write("<h3>Age calculator</h3>")
var current_year = 2016;
document.write("Current year : 2016 <br/>")
var birth_year = 1992;
document.write("birth year : 1992 <br/>")

var age1 = current_year - birth_year;
console.log(age1)
var age2 = age1 - 1;
console.log(age2)

var result = ("they are either", age1, "or", age2, "years old.")
console.log(result)
document.write("your age is : 24")

//Q12
document.write("<h3>The Geometrizer</h3>")
var radius = 20;
document.write("Radius of a circle is:", radius, "<br/>")
var circumference = 2 * 3.14 * radius; //circumference
console.log(circumference)
document.write("The circumference is: ", circumference, "<br/>")

var area = 3.14 * radius * radius;
console.log(area)
document.write("The area is: ", area, "<br/>")

//Q13
document.write("<h3>The lifetime Supply Calculator</h3>")
var fav_snack = ("chocolate chip");
document.write("favourite snack : ", fav_snack, "<br/>")

var age = 15;
document.write("current age :", age, "<br/>")

var max_age = 65;
document.write("estimated maximum age :", max_age, "<br/>")

var snacks_perday = 3;
document.write("Amount of snacks per day: ", snacks_perday, "<br/>")

var calculate = (snacks_perday * max_age - 15)
console.log = (calculate)
document.write("you will need ", calculate, " chocolate chips to last until the ripe old age of 65")

////// chapter 6-9

//Q1

var a = 10;
document.write("the value of a is: ", a, "<br/><br/>")

document.write("the value of ++a is: ", ++a, "<br/>")
document.write("now the value of a is: ", a, "<br/><br/>")

document.write("the value of a++ is: ", a++, "<br/>")
document.write("now the value of a is: ", a, "<br/><br/>")

document.write("the value of --a is: ", --a, "<br/>")
document.write("now the value of a is: ", a, "<br/><br/>")

document.write("the value of a-- is: ", a--, "<br/>")
document.write("now the value of a is: ", a, "<br/><br/>")

//Q2
var a = 2;
document.write("a is: ", a, "<br/>")

var b = 1;
document.write("b is: ", a, "<br/>")

var result = --a - --b + ++b + b--;
document.write("result is: ", result, "<br/>")

//Q3
var name = prompt("enter your name")
document.write("name :", name, "<br/>")
var print = (name + "!")
document.write("Hello,", print, "<br/>")

//Q4 missing in assignment

//Q5
var num = prompt("Enter a number:")
if (num == "");
num = 5;
var num = prompt(num)

//Q6
document.write("<h3> Marksheet </h3>")
var maths = prompt("Enter Your Maths Marks");
var chem = prompt("Enter Your Chem Marks");
var eng = prompt("Enter Your Eng Marks");
var obtained_marks = parseInt(maths) + parseInt(chem) + parseInt(eng);
var percentage = obtained_marks * 100 / 500

document.write("Total Marks: 500 <br/>")
document.write("Obtained Marks: " + obtained_marks + "<br/>");
document.write("Percentage: " + percentage + "<br/>");

if (percentage >= 80) {
    document.write("Grade: A+ <br/>");
}
else if (percentage >= 70) {
    document.write("Grade: A <br/>");
}
else if (percentage >= 60) {
    document.write("Grade: B <br/>");
}
else if (percentage >= 50) {
    document.write("Grade: C <br/>");
}
else if (percentage >= 40) {
    document.write("Grade: D <br/>");
}
else {
    document.write("You Are Fail!! <br/>");
}

/* if else if of remarks */
if (percentage >= 80) {
    document.write("Remarks: Excellent");
}
else if (percentage >= 70) {
    document.write("Remarks: Very Good");
}
else if (percentage >= 60) {
    document.write("Remarks: Good");
}
else if (percentage >= 50) {
    document.write("Remarks: Fair");
}
else if (percentage >= 40) {
    document.write("Remarks: Needs Improvement");
}
else {
    document.write("Remarks: Disqualified");
}
/* if else if of remarks */

//////// chapter 9-11

//Q1
var city = ("karachi");
var usercity = prompt("enter city")
if ("city===usercity") { alert("welcome to city of lights") }

//Q2
var gender = ("male")
var usergender = prompt("enter gender")
if ("gender===usergender") { alert("Good morning Sir"); }

var gender = ("female")
var usergender = prompt("enter gender")
if ("gender===usergender") { alert("Good morning madam"); }

// //Q3
var color = prompt("enter traffic signal light color");
if (color === "red") { alert("must stop"); }
else if (color === "yellow") { alert("Ready to move"); }
else if (color === "green") { alert("Move now"); }
else { alert("it's not a traffic signal light color "); }

//Q4
var fuelInCar = prompt("enter remaining fuel in car (in litres)");
if (fuelInCar < 0.25) { alert("please refill the fuel in car"); }

//Q5
var a = 4;
if (++a === 5) { alert("given condition for variable a is true "); }//displayed 

var b = 82;
if (b++ === 83) { alert("given condition for variable b is true "); }//not displayed

var c = 12;
if (c++ === 13) { alert("condition 1 is true"); }//not displayed
if (c === 13) { alert("condition 2 is true"); }//not displayed
if (++c < 14) { alert("condition 3 is true"); }//displayed
if (c === 14) { alert("condition 4 is true"); }//not displayed

var materialCost = 20000;
var labourCost = 2000;
var totalCost = materialCost + labourCost;
if (totalCost === labourCost + materialCost) { alert("the cost equals"); }//displayed

if (true) { alert("True"); }//displayed
if (false) { alert("false"); }//not displayed

if ("car" < "cat") { alert("car is smaller than cat"); }//displayed

//Q6
document.write("<h3>Marks Sheet<h3/>")
var maths = prompt("Enter Your Maths Marks");
var chem = prompt("Enter Your Chem Marks");
var eng = prompt("Enter Your Eng Marks");
var obtained_marks = parseInt(maths) + parseInt(chem) + parseInt(eng);
var percentage = obtained_marks * 100 / 500

document.write("Total Marks: 500 <br/>")
document.write("Obtained Marks: " + obtained_marks + "<br/>");
document.write("Percentage: " + percentage + "<br/>");

if (percentage >= 80) {
    document.write("Grade: A+ <br/>");
}
else if (percentage >= 70) {
    document.write("Grade: A <br/>");
}
else if (percentage >= 60) {
    document.write("Grade: B <br/>");
}
else if (percentage >= 50) {
    document.write("Grade: C <br/>");
}
else if (percentage >= 40) {
    document.write("Grade: D <br/>");
}
else {
    document.write("You Are Fail!! <br/>");
}

/* if else if of remarks */
if (percentage >= 80) {
    document.write("Remarks: Excellent");
}
else if (percentage >= 70) {
    document.write("Remarks: Very Good");
}
else if (percentage >= 60) {
    document.write("Remarks: Good");
}
else if (percentage >= 50) {
    document.write("Remarks: Fair");
}
else if (percentage >= 40) {
    document.write("Remarks: Needs Improvement");
}
else {
    document.write("Remarks: Disqualified");
}
/* if else if of remarks */

//Q7
var number = 7;
var guess = prompt("guess the number.");
if (guess === number) { alert("Bingo! Correct answer."); }
else if (guess === 8) { alert("close enough to correct answer."); }

//Q8
var number = prompt("Enter a Number");
var modulus = number % 3;
if (modulus === 0) {
    alert(number + " is divisible by 3");
}

//Q9
var number = prompt("Enter a Number");
var modulus = number % 2;
if (modulus === 0) {
    alert(number + " is an even number");
}
else {
    alert(number + " is an odd number");
}

//Q10
var temperature = prompt("Enter Temperature");
if (temperature > "40") {
    alert("It is too hot outside.");
}
else if (temperature > "30") {
    alert("The Weather today is Normal.");
}
else if (temperature > "20") {
    alert("Today’s Weather is cool.");
}
else if (temperature > "10") {
    alert("OMG! Today’s weather is so Cool.");
}

//Q11
var first_number = +prompt("Enter First Number");
var second_number = +prompt("Enter Second Number");
var operation = prompt("Enter Operator");
var addition = first_number + second_number;
var substract = first_number - second_number;
var multiply = first_number * second_number;
var division = first_number / second_number;
var modulus = first_number % second_number;
if (operation === "+") {
    alert("The Answer is: " + addition);
}
else if (operation === "-") {
    alert("The Answer is: " + substract);
}
else if (operation === "*") {
    alert("The Answer is: " + multiply);
}
else if (operation === "/") {
    alert("The Answer is: " + division);
}
else if (operation === "%") {
    alert("The Answer is: " + modulus);
}

/////chapter 12-13

//Q1
var a = prompt("enter one character(number or alphabet)");
if (a.charCodeAt() >= 65 && a.charCodeAt() <= 90) {
    alert("Uppercase Letter");
} else if (a.charCodeAt() >= 97 && a.charCodeAt() <= 122) {
    alert("Lower Letter");
} else {
    alert("It's a number");
}

//Q2
var Integer1 = prompt("enter Integer1");
var Integer2 = prompt("enter Integer2");
if (Integer1 > Integer2) {
    alert(Integer1 + " is larger");
} else if (Integer2 > Integer1) {
    alert(Integer2 + " is larger");
} else if (Integer1 === Integer2) {
    alert("both are equal");
}

//Q3
var num = prompt("enter a number");
if (num > 0) {
    alert(num + " is a positive number");
} else if (num < 0) {
    alert(num + " is a negative number");
} else if (num === 0) {
    alert("It's a 0");
}

//Q4
var character = prompt("enter a character(i.e. string of length 1");
if (
    character === "a" ||
    character === "e" ||
    character === "i" ||
    character === "o" ||
    character === "u"
) {
    alert("True");
} else {
    alert("False");
}

//Q5
var password = "Correctpassword";
var user_password = prompt("enter your Password");
if (user_password === "") {
    alert("Please enter your password");
} else if (user_password === password) {
    alert("Correct! The password you entered matches the original password");
} else if (user_password != password) {
    alert("Incorrect password");
}

//Q6
var hour = prompt("enter current hour");
// var hour = 13;
if (hour < 18) {
    alert
        ("good day")
}
else if (hour > 18) {
    alert("good evening")
}


//Q7
var time = parseInt(prompt("enter time in 24 hour clock format"));
if (time >= 0000 && time < 1200) {
    alert("Good Morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good Evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good Night!");
}


































































































































