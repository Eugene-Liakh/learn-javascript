let age = 15;

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if (age < 6) {
  console.log("Get it for FREE!");
} else if (age > 6 && age < 17) {
  console.log("Get it with a child discount");
} else if (age > 17 && age < 26) {
  console.log("Get it with a student discount");
} else if (age > 26 && age < 66) {
  console.log("No discount for you");
} else if (age > 66) {
  console.log("Get it with a senior citizen discount");
}
