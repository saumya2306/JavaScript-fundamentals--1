// JavaScript Fundamentals - 2//

// Quetion -1 //

const ArrUserList = ["mithun", "abhishek", "kishan"];

function CheckUserName(userName) {
  if (ArrUserList.includes(userName)) {
    console.log(`Yes, ${userName} is a valid user.`);
  } else {
    console.log(`No, ${userName} is not a valid user.`);
  }
}

// CheckUserName("mithun")//

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,//

// Quetion -2 //

const totalCard = [125, 20, 100, 30, 344];

const total = totalCard.reduce(calculateCardPrice);
function calculateCardPrice(prewiesPrice, NextPrice) {
  return prewiesPrice + NextPrice;
}

// console.log(`$${total.toFixed(2)}`)

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//

// Quetion -3 //

const student = [
  {
    name: " mithun",
    marks: 95,
  },

  {
    name: " prabir",
    marks: 75,
  },
  {
    name: " alka",
    marks: 92,
  },
  {
    name: " shivam",
    marks: 70,
  },
  {
    name: " farman",
    marks: 99,
  },
];

function FindStudentName(nameStu) {
  for (const FindName of student) {
    let findStudentName = FindName.name;
    let findStudentmark = FindName.marks;
    let CheckStudent = findStudentName.includes(nameStu);
    if (CheckStudent) {
      // console.log(`congratulation, ${nameStu}`)
      if (findStudentmark > 90) {
        console.log(
          `congratulation, ${nameStu}, You have clear exam. Mark optaine - ${findStudentmark}`
        );
      } else {
        console.log(`${nameStu}, You Are Fail.`);
      }
    } else {
      console.log("Please Enter Correct Name");
    }
    break;
  }
}

// FindStudentName("monu");


// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//

// Quetion-4 //


const productlist = [
    {
        name:"laptop", 
        price:120000
    },
    {
        name:"Laptop bag", 
        price:2000
    },
    {
        name:"watch", 
        price:20000
    },
    {
        name:"Mobile", 
        price:70000
    },
    {
        name:"Mobile Charger", 
        price:1500
    },
]


function ProductPriceChecker(productName){
    for (const Productcheck of productlist) {
        let ProductName = Productcheck.name
        let productPrice = Productcheck.price
       let CheckIteam = ProductName.includes(productName)
       if (CheckIteam) {
        if (productPrice>2000) {
            console.log(`The product with minimum amount is ${productName} which is the priced at RS. ${productPrice} `)
        }
        else{
            console.log(`The product with maximum amount is ${productName} which is the priced at RS. ${productPrice} `)
        }
        
       }

       else{
        console.log(`${productName} is not Available in Store. `)
       }
       break
    }

}

// ProductPriceChecker("laptop")



// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//

// Quetion -5//

const gueste = ["anuraj", "mithun", "Alka", "Prabir", "Shivam"]

let Write = gueste.join( ",, ")
// console.log(Write)


// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//

// Quetion-6//


const productdetail = {
    name: "Apple 2020 MacBook Air Laptop",
    price:82000,
    color: "Grey",
    dardDisk:"256GB"



}


function ProductDetailed(nameofproduct){
    console.log(" below are the product detail ")
    console.log( ` Name -: ${productdetail.name}`)
    console.log( ` Price -: ${productdetail.price}`)
    console.log( ` Color -: ${productdetail.color}`)
    console.log( ` HardDisk -: ${productdetail.dardDisk}`)
    
    return
}
    
// ProductDetailed()


// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//


// Quetion -7//


function GenerateOTP(){
    let CreateOTPn =  Math.random(1)
    let MAkeOTP = CreateOTPn*12340
    let OTP = MAkeOTP.toFixed(0)
    
    console.log(OTP)
}

// GenerateOTP()

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//

// Quettion -8//

let CurrentDate = Date.now()
let EventDate = new Date("2024-08-31")
let EventDateInmilisecon = EventDate.getTime()

function EventDayCalculater(inputdate){

    let Reamaing = EventDateInmilisecon-inputdate;
   let  ReamaingDay = (Reamaing/86400000).toFixed(0)
    console.log(`The grand Event Orginaiged After ${ReamaingDay} days.`)

    return
}

// EventDayCalculater(CurrentDate)

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//


// Quetion -9 //


 
 
