alert("Welcome ladies and gentlemen")
let age = prompt("Please enter your age here")
if(age < 13){
   let accompained = prompt("Is the potential customer accompanied?: y/n")
       if(accompained == 'y'){
           alert("Your ticket price is £6.00")
       }
       else{
           alert("We are unable to let you in")
       }
}
else{
   alert("Your ticket price is £8.50")
}


//function prime(){
//    let num = prompt("Please enter a number: ")
//    if(num%num == 1 || num%2 != 0){
//        alert("Your number is a prime number")
//    }
//    else{
//        alert("Your number is an even number")
//    }
//}
//prime()