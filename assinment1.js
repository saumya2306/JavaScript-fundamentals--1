

// Quetion no. 2//
  

 const userList = ["admin",12345 ]
 function login( userName , Password){
     if(userList.includes(userName) && userList.includes(Password) ){
        console.log("Login suessful")
     }
     else{
        console.log("Invalid, userName or Password")
     }
     return
 }

  const userid = "admin"
  const passWord =12345 

//  login(userid, passWord)

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//


// Quetion 3//
let Enter = 850


function CurrencyConv(inputvalue){
       let convert = ` ${inputvalue/82} USD`
        console.log(convert)
    return
}

// CurrencyConv(Enter)

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//


// Quetion -4 //

let numofchild = 2
let numofadult = 1
let numofseniar = 1

function TicketBooking( child, adult, seniar ){
    let Totalchild = 100*child  
    let Totaladult = 150*adult
    let Totalseniar = 120*seniar
    let total = ` Total Ticket Fare - ${Totaladult+Totalchild+Totalseniar}INR`
    
    console.log(total)
    return
}

// TicketBooking(numofchild, numofadult, numofseniar)

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//

// Quetion -5 //

let packagetype = '';

switch (packagetype) {
    case 'standard':
        console.log("It will delever with in 2-3 days");
        break;
    case 'express':
        console.log("It will delever with in 1-2 days");
        break;
    case 'overnight':
        console.log("It will delever Tommorrow");
        break;
    default:
        console.log("please Enter Correct Package Type ");
}


// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,//

// Quetion-6//
let EnterName = "mithun"
let EnterGmail = "mithun s@pw.live"
let EnterNumber = 21

function typeChecker(){

    function NameChecker(Enter){
        let strig =typeof(Enter)
        if (strig==="string") {
            console.log(Enter)
        }
        else{
            console.log("Name should be in shtring")
        } 
        return
    }
    
    // NameChecker(EnterName)
//    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//  
    
function GmailChecker(Enter){
    let strig =typeof(Enter)
    if (strig==="string") {
        console.log(Enter)
    }
    else{
        console.log("Gmail should be in shtring")
    } 
    return
}

// GmailChecker(EnterGmail)

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,//


function NumberChecker(Enter){
    let strig =typeof(Enter)
    if (strig==="number") {
        console.log(Enter)
    }
    else{
        console.log("Number  should be in integer")
    } 
    return
}

// NumberChecker(EnterNumber)

    return
}

// typeChecker()



// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//


// Quetion -7//


const Array = ["shose", "T-Shirt", "Shirt"]

for (let index = 0; index < Array.length; index++) {
    const element = Array[index];
    // console.log(element)
    
}


// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//


// Quetion -8 //

let  Num = 10
// while (Num>=0) {
//     console.log(Num);
//     Num--;
// }


// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//

// Quetion 9 //

const Arr = [1, 3, "mithun", 4, 5, "abhishek bachan"]

function findArrayString(){
    for (const findstring of Arr) {
        if(typeof(findstring) ==="string"){
             console.log(`found first string -: ${findstring}`)
        }
    }
}
// findArrayString()


// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//


// Quetion 10 //

const  ArrPositive = [1, -3, 4, 5, -3, 9, -1]

function findPositive(){
    for (const PositiveNum of ArrPositive) {
        if (PositiveNum>0) {
            console.log(PositiveNum)

            
        }
    }
}

// findPositive()