const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.






// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down,
//take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
//  employeeIn -> into function -> {}

function employeeBonus(employeeIn) {
  // console.log(employeeIn);
  let bonusPercent = 0; // 0
  // 47000 * 0 = 0
  // let totalBonus = bonusPercent * employeeIn.annualSalary;
  if (employeeIn.reviewRating <= 2){
    console.log('No bonus for you!', employeeIn.name);
    bonusPercent += 0;
  } else if(employeeIn.reviewRating === 3) {
    console.log('You get a 4% bonus ', employeeIn.name);
    bonusPercent += 0.04; // 0.04

  } else if (employeeIn.reviewRating === 4) {
    console.log('You get a 6% bonus', employeeIn.name);
    bonusPercent += 0.06;

  } else if (employeeIn.reviewRating === 5) {
    console.log('You get a 10% bonus', employeeIn.name);
    bonusPercent += 0.10;
  }
  // ...

  // This is where we for sure know the bonusPercent
  // 47000 * 0.04 = 1880
  let totalBonus = bonusPercent * employeeIn.annualSalary;
  // Number.parseInt() turns a string into a number. '47000' -> 47000
  // 1880 + '47000' = '188047000', 1880 + 47000 = 48880
  let totalCompensation = totalBonus + Number.parseInt(employeeIn.annualSalary);
  return {
    name: employeeIn.name,
    annualSalary: employeeIn.annualSalary,
    bonusPercent: bonusPercent,
    totalBonus,
    totalCompensation
    // ...
  }
}
// Calculate a specific employee bonus
// console.log(employeeBonus(employees[0]));
// Calculate all employee bonuses

for (let employee of employees) { // <-- go through the array

  // Atticus is passed into the function

  console.log( employeeBonus(employee) );
}



/**  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  }, */