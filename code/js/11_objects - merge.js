/*
  ======================================== OBJECTS merge ====================================================
*/

//  ...food (da solo)  --> NON ESISTE

let food = {
  fruit: 'apple',
  vegetable: 'tomato',
  dessert: 'cake'
}

let drinks = {
  energydrink: 'redbull'
}

let mergefooddrinks = {...food, ...drinks}


// {fruit: "apple", vegetable: "tomato", dessert: "cake", energydrink: "redbull"}


// ----------------------------------------


let food = {
  fruit: 'apple',
  vegetable: 'tomato',
  dessert: 'cake'
}

// add property coffee to food
let mergefoodcoffee = {...food, coffee: 'espresso'}

// {fruit: "apple", vegetable: "tomato", dessert: "cake", coffee: "espresso"}
