function primeInRange(n1,n2){
    if (n1<n2 && n1>0 && n2>0){
        for (i=2;i<=n2;i++){
            if(n1 %i==0){
                return console.log("False")
            }
            else{
                return console.log("True")

            }
        }

    }

} 


primeInRange(3, 5) 
primeInRange(62, 66) 