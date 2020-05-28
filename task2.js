// Summing the odd numbers and even numbers in the list
var number=[10,22,32,43,54,63]; // List of numbers

var odd_total=0; //Initializing odd result
var even_total=0; //Initializing even result
for (var i in number){ //Looping through the list
    if (number[i]%2==1){
        odd_total+=number[i];
    }
    else {
        even_total+=number[i]
    }
}

document.writeln("The sum of odd numbers is",odd_total ," and the sum of even numbers is",even_total); //Printing the odd result
