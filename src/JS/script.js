// 11.Introducing Else Statements
function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    }
  
    else  {
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);

//   12.Introducing Else If Statements
function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    else if (val < 5) {
      return "Smaller than 5";
    }
     else{return "Between 5 and 10";}
    
  }
  
  testElseIf(7);

//   13.Logical Order in If Else Statements
function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);


//   14.Chaining If Else Statements
function testSize(num) {
    // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  
  }
  else if (num < 20) {
    return "Large";
  
  }
  
   else {
    return "Huge";
  }
  
    
    // Only change code above this line
  }
  
  testSize(7);

//   15.Golf Code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
   if(strokes==1)
   {
     return "Hole-in-one!";
   }
   else if(strokes<=par - 2)
   {
     return "Eagle";
   }
    else if(strokes==par - 1)
   {
     return "Birdie";
   }
   else if(strokes==par)
   {
     return "Par";
   }
   else if(strokes==par+ 1)
   {
     return "Bogey";
   }
   else if(strokes==par + 2)
   {
     return "Double Bogey";
   }
  
  else{
   return "Go Home!";
  }
  
  // Only change code above this line
}

golfScore(5, 4);
 
// 16.Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
  switch (val) {
    case 1:
      answer="alpha";
      break;
    case 2:
      answer="beta";
      break;
    case 3:
      answer="gamma";
      break;
    case 4:
      answer="delta";
      break;
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);

//   17.Adding a Default Option in Switch Statements
function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
  switch (val) {
    case "a":
      answer ="apple";
      break;
    case "b":
     answer ="bird"
      break;
    case "c":
      answer ="cat"
      break; 
  
    default:
      answer ="stuff"
      break;
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);

//   18.Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
    answer="Mid";
    break;
    case 7:
    case 8:
    case 9:
    answer="High";
  
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);

//   19.Replacing If Else Chains with Switch
function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
  switch (val)
  {
    case "bob":
       answer = "Marley"; break;  
    case 42:
       answer = "The Answer"; break; 
    case 1:
       answer = "There is no #1"; break;  
     case 99:
       answer = "Missed me by this much!"; break;  
      case 7:
       answer = "Ate Nine"; break;       
  
  
  }
    
  
    // Only change code above this line
    return answer;
  }
  
  chainToSwitch(7);

//   20.Returning Boolean Values from Functions
function isLess(a, b) {
    // Only change code below this line
    return (a < b) ;
    
    // Only change code above this line
  }
  
  isLess(10, 15);