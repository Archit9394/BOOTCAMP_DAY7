total_nums=window.prompt("How many numbers you want to enter?");
if (total_nums<=5){
    var num=[];
    for (var i=0; i<total_nums;i++){
        num[i]=prompt("Enter number ");
    }
    num.sort(function(a, b){return a-b});
    document.write(num);
}
else{
    window.alert("You can't enter more than 5 numbers!")
}