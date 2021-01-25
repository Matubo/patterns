//Смысл адаптера - прокладка между возвращаемым функцией результатом и его клиентом
//Например у нас строгая проверка на тип, адаптер позваляет информацию в него перевести....
function Calculate(num) {
  return {
    1: { 1: num * 1, 2: num * 2, 3: num * 3 },
    2: { 1: num * 1, 2: num * 2, 3: num * 3 },
    3: { 1: num * 1, 2: num * 2, 3: num * 3 },
  };
}

function Log(data) {
  try {
    if (typeof data == "string") {
      console.log(`Correct data. \n Data: ${data}`);
    } else {
      throw new Error("Invalid data");
    }
  } catch (err) {
    console.log(err);
  }
}

function Adapter(data) {
  return JSON.stringify(data);
}

Log(Adapter(Calculate(10)));
Log(Calculate(10));
