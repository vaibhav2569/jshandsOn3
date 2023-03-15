// 1.Comparison with the Strict Equality Operator
function testStrict(val) {
    if (val===7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);

//   2.Practice comparing different values
// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");

//   3.Comparison with the Inequality Operator
function testNotEqual(val) {
    if (val!=99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);

//   4.Comparison with the Strict Inequality Operator
function testStrictNotEqual(val) {
    if (val!==17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);

//   5.Comparison with the Greater Than Operator
function testGreaterThan(val) {
    if (val>100) {  // Change this line
      return "Over 100";
    }
  
    if (val>10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);

//   6.Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
    if (val>=20) {  // Change this line
      return "20 or Over";
    }
  
    if (val>=10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);

//   7.Comparison with the Less Than Operator
function testLessThan(val) {
    if (val<25) {  // Change this line
      return "Under 25";
    }
  
    if (val<55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);

//   8.Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
    if (val<=12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val<=24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);

//   9.Comparisons with the Logical And Operator
function testLogicalAnd(val) {
    // Only change code below this line
  
   if (val >= 25 && val<= 50) {
    return "Yes";
  }
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);

//   10.Comparisons with the Logical Or Operator
function testLogicalOr(val) {
    // Only change code below this line
  
    if (val<10  || val>20) {
      return "Outside";
    }
  
  
  
    // Only change code above this line
    else
    return "Inside";
  }
  
  testLogicalOr(15);