// 21.Return Early Pattern for Functions
// Setup
function abTest(a, b) {
    // Only change code below this line
  
  if( a<0 ||b<0)
  return;
  
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);

//   22.Counting Cards
let count = 0;

function cc(card) {
  // Only change code below this line
if (card==2 ||card ==3 || card==4 || card==5 ||card==6)
{
  count++;
  
}
else if(card==10 ||card =='J' || card=='Q' || card=='K' ||card=='A')
{
  count --;
}
else if(card==7 ||card ==8 || card==9 )
{
  count=count;
}

  let ans=count>0? count+" "+"Bet": count+" "+"Hold";
  return ans;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
//  23.Build JavaScript Objects
const myDog = {
    // Only change code below this line
  
   "name": "Ford",
    legs: 5,
    tails: 2,
    friends:[]
    // Only change code above this line
  };

//   24.Accessing Object Properties with Dot Notation
// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj.shirt;    // Change this line

//   25.Accessing Object Properties with Bracket Notation
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  const entreeValue = testObj["an entree"];   // Change this line
  const drinkValue = testObj["the drink"];    // Change this line

//   26.Accessing Object Properties with Variables
/ Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line

// 27.Updating Object Properties
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line
  myDog.name="Happy Coder";

//   28.Add New Properties to a JavaScript Object
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog.bark = "bow-wow";

//   29.Delete Properties from a JavaScript Object
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  // Only change code below this line
  delete myDog.tails;

//   30.Using Objects for Lookups
// Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    const lookup={
      "alpha":"Adams",
      "bravo":"Boston",
      "charlie": "Chicago",
      "delta":"Denver",
       "echo":"Easy",
       "foxtrot":"Frank"
    }
    
  result=lookup[val];
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");