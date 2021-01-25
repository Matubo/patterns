//Фабрика возвращает нам сущность и фабрике нет разницы что у нее за клиент
//она воспринимает его как обстракцию(похеру кто кушает и пьет)
function Drink(type) {
  let drink = type ? type : "nothing";
  return {
    function() {
      console.log(`start to drink ${drink}`);
    },
  };
}

function Food(type) {
  let eat = type ? type : "nothing";
  return {
    function() {
      console.log(`start to eat ${eat}`);
    },
  };
}

function getLifeAbility(eat, drink) {
  return { Drink: Drink(drink), Eat: Food(eat) };
}

let person = {
  age: 18,
  sex: "f",
  ability: getLifeAbility("bread"),
};

let animal = {
  age: 3,
  sex: "m",
  ability: getLifeAbility("corn", "water"),
};

console.log(person);
console.log(animal);
