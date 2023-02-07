// Question No 1

/*var firstNumber = 3;
var secondNumber = 5;
var sum = firstNumber + secondNumber;
document.write(" Sum of "+ firstNumber  + " and "  + secondNumber + " is " + sum );*/


// Question 2

/*var firstNumber = 5;
var secondNumber = 3;
var sum = firstNumber - secondNumber;
document.write(" Subtraction  of "+ firstNumber  + " and "  + secondNumber + " is " + sum );

var firstNumber = 3;
var secondNumber = 5;
var sum = firstNumber * secondNumber;
document.write(" multiplication of "+ firstNumber  + " and "  + secondNumber + " is " + sum );

var firstNumber = 3;
var secondNumber = 5;
var sum = firstNumber / secondNumber;
document.write(" division of "+ firstNumber  + " and "  + secondNumber + " is " + sum);

var firstNumber = 3;
var secondNumber = 5;
var sum = firstNumber % secondNumber;
document.write(" modulus of "+ firstNumber  + " and "  + secondNumber + " is " + sum);*/

/*// Question 3

// (a)
var math =

    // (b)
    document.write("<p>" + math + "</p>");

// (c)
var number1st = 5;

// (d)
document.write("<p>" + "Initil Value:" + number1st + "</p>");

// (e)
var number2nd = 5;
var number3rd = 1;
var numberTotal = number2nd + number3rd;

// (f)
document.write("<p>" + "“Value after increment is:" + numberTotal + "." + "</p>");

// (g)
var numberTotal
numberTotal = numberTotal + 7;

// (h)
document.write("<p>" + "“Value after addition is:" + numberTotal + "." + "</p>");

// (i)
var numberTotal
numberTotal = numberTotal - 1;

// (j)
document.write("<p>" + "“Value after decreamant is:" + numberTotal + "." + "</p>");

// (k)
var numberTotal
numberTotal = numberTotal % 3;

// (L)
document.write("<p>" + "“The remainder is :" + numberTotal + "</p>");

// Question 4
var movieTicket = 600;
var buyTicket = 5;
var amount = movieTicket * buyTicket;
document.write("<p>" + "Total cost to buy" + buyTicket + "Tickets to a movie is" + amount + "PKR" + "</p>");

// Question 5
/*document.write("<h1>" + "Table of 4" + "</h1>")
var t = 4;
var i = 1;
while (i <= 10) {
    document.write(t + "  X  " + i + "  =  " + i * t + "<br>");
    i++;
}

// Question 6
// (a)
var nnC = 25;
var nnF = (25 * 9 / 5) + 32;
// (b)
document.write("<p>" + nnC + " C⁰ is " + nnF + "F⁰" + "</p>");

// (c)
var nnFr = 70;
var nnCe = (70 - 32) * 5 / 9;
// (d)
document.write("<p>" + nnFr + " C⁰ is " + nnCe + "F⁰" + "</p>");

// Question 7
document.write("<h1>Shopping Cart</h1>")
// (a)
var item1st = 650;
var qtyItem1st = 3;
document.write("<p>Price of item 1 is:" + item1st + "<p/>");

// (b)
var item2nd = 100;
var qtyItem2nd = 7;
document.write("<p>Price of item 2 is:" + item2nd + "<p/>");

// (c)
document.write("<p>Qty of item 1 is:" + qtyItem1st + "<p/>");

// (d)
document.write("<p>Qty of item 2 is:" + qtyItem2nd + "<p/>");

// (e)
var shippChar = 100;
document.write("<p>Shipping Charges" + shippChar + "<p/>")

// (Final-End-rciept)
var nnnn = item1st * qtyItem1st + item2nd * qtyItem2nd + shippChar;
document.write("<h2>" + "Total cost of your order is::" + nnnn + "<h2/>");

// Question 8
document.write("<h1>Marks Sheet</h1>");

var tMarks = 980;
var oMarks = 804;
document.write("<p>Total Marks:980<br/>Marks obtained:804<br/>Percentage:" + oMarks * 100 / tMarks + "<p/>");

// Question 9
document.write("<h1>Currency in PKR.</h1>");

var exCurrencyDollar = 104.80 * 10;
var exCurrencyRial = 28 * 25;
var totalCurrncyPkr = exCurrencyDollar + exCurrencyRial;
document.write("<p>Total currency in PKR:" + totalCurrncyPkr + "<p/>");

// Question 10
var arithmetic = 5 * 10;
var arithmetic1st = arithmetic / 2;

console.log("<p>" + arithmetic1st + "<p/>");

// Question 11
document.write("<h1>Age Calculator</h1>");

var currentAge = 2023 - 2004;
document.write("<p>Current Year:2023<br/>Birth Year:2004<br/>Your age is::" + currentAge + "<p/>");

// Question 12
document.write("<h1>The Geometrizer:</h1>");
var radiusCircle = 20;
var cCircle = 2 * 3.142 * 20;
var areaCircle = 400 * 3.142;

document.write("<p>Radius of a circle is::20<br>The circumference is::" + cCircle + "<br>The Area is::" + areaCircle + "<p/>");

// Question 13
document.write("<h1>The Lifetime Supply Calculator:</h1>");

var fSnacks = "Chocolate chip";
var currentAge = 15;
var maximumAge = 65;
var aSnackPerDay = 3;
var fResult = maximumAge - currentAge;
var finalResult = fResult * aSnackPerDay;
document.write("<p>You will need " + finalResult + " Chocolate chip to last you until the ripe old age of 65" + "<p/>");

// Chapter (6) to (9)

// Question 1
var unFam = 10;
document.write("<p>The Current num is 10:<br>" + "Now i start to apply unfamilier operater<br>:" + ++unFam + "<br>" + ++unFam + "<br>" + --unFam + "<br>" + --unFam + "<p/>");


// Question 2
var a = 2;
var b = 1;
var resultOfNnn = --a - --b + ++b + b--;
document.write("<h1>According to book::<h1/>");
document.write("<p>" + "--a;" + "+1+" + "<br/>" + "--a - --b;" + "+1 - 0+" + "<br/>" + "--a - --b + ++b;" + "+1 - 0 + 1+" + "<br/>" + "--a - --b + ++b + b--;" + "+1 - 0 + 1 + 1+" + "<br/>" + "<p/>");

// Question 3


//input
/*yourName = input();

//output
print("Hello " + yourName + ", glad to meet you!");



// Question 5

let num = window.prompt("Enter a number:", "5");
num = parseInt(num) || 5;
i = 1;

document.write("<table border='1'>");
if (i = 1 && i <= 10 && i++) {
    document.write("<tr>");
    document.write("<td>" + num + "x" + i + "=" + num * i + "<td/>");
    document.write("<tr/>");
}
document.write("<table/>");

// Question 6
document.write("<h2>Subject || Total Marks || Obtained Marks || Percentage..<h2/>");
var subject1st = "English";
var subject2nd = "Math";
var subject3rd = "Urdu";

var totalMarkss = 100;
var obMarks1st = 54;
var obMarks2nd = 54;
var obMarks3rd = 48;
var obMarksTotal = obMarks1st + obMarks2nd + obMarks3rd;

var percentege1st = 54 / 100 * 100;
var percentege2nd = 54 / 100 * 100;
var percentege3rd = 48 / 100 * 100;

var totalPercentage = 156 / 300 * 100;
var totMarks = (totalMarkss * 3);
document.write("<table>");
document.write("<tr>");
document.write("<td>" + subject1st + "<br>" + subject2nd + "<br>" + subject3rd + "</td>");
document.write("<td>" + totalMarkss + "<br>" + totalMarkss + "<br>" + totalMarkss + "<br>" + totMarks + "</td>");
document.write("<td>" + obMarks1st + "<br>" + obMarks2nd + "<br>" + obMarks3rd + "<br>" + obMarksTotal + "</td>");
document.write("<td>" + percentege1st + "<br>" + percentege2nd + "<br>" + percentege3rd + "<br>" + totalPercentage + "</td>");
document.write("<tr/>");
document.write("<table/>");

var percentege1st = 54 / 100 * 100;*/