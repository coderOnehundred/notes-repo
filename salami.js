const tenKiloBag = [];
let remainingCapacity = 10;

const salamis = [
    {
        name: 'premium salami',
        price: 300,
        weight: 3,
        unit: "kg"
    },
    {
        name: 'medium tier salami',
        price: 200,
        weight: 4,
        unit: "kg",
    },
    {
        name: "low tier salami",
        price: 100,
        weight: 3,
        unit: "kg",
    },
    {
        name: "straight from hell salami",
        price: 30,
        weight: 2,
        unit: "kg"
    }
];


for (let [index, salami] of salamis.entries()) {
    salami.valuePerKilo = salami.price / salami.weight;
    salami.index = index;
}

let bestChoice = {};
let bestValuePerKilo = 0;

for (let salami of salamis) {
    if (bestValuePerKilo < salami.valuePerKilo) {
        bestValuePerKilo = salami.valuePerKilo;
        bestChoice = salami;
    }
}

console.log(salamis);

salamis.splice(bestChoice.index, 1); // this removes one item at index bestchoice.index (we take the salami out of the fridge, that's why we remove it)

console.log(salamis);


// console.log(bestChoice);




/*
300 3
x   1    100      

200 4
x   1   50

100 3  
x   1   33.33


100%  300
  ?     135

*/













