//Стратегия (нужный метод) выбирается в зависимости от запроса, не нужно изменять начальную сущность,
//а просто написать нужный метод, напр стратегии 2 и 3 вызываются так же как и 1я
function mainFunction(strategy, message, ...arg) {
  strategy(message, arg);
}

function Strategy1(message) {
  console.log(message);
}
function Strategy2(message) {
  console.log("Вторая стратегия: " + message);
}
function Strategy3(message, arg) {
  console.log(message + ": " + arg);
}

mainFunction(Strategy1, "test1");
mainFunction(Strategy2, "test2");
mainFunction(Strategy3, "test3", [1, 2, 3, 4]);
