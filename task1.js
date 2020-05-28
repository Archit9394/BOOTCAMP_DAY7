//Averaging 5 numbers
var numb=[10,20,30,40,50]; //List of 5 Numbers
var avg; //Result
var total_sum=0; //Initializing the numerator
for (var i in numb){  //Looping through the list
    total_sum+=numb[i];
}
var total_num=numb.length; //Total Numbers in the list
avg=total_sum/total_num; // Result

document.write(avg); //Printing the result in the terminal 
