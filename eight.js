function shiftToLeft(a,b){
 product=1

 if (b>0){
 for (i=1;i<=b;i++){
    product=product*2
}
return console.log(a*product)
 }
 else{
    print("invalid input")
 }
}


shiftToLeft(5,2)