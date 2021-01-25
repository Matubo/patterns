//Отражает два пункта
//1)Гарантирует наличие единственного экземпляра класса
//2)Предоставляет глобальную точку доступа
//При каждом обращении возвращается один и тот же объект
const singleton = (function () {
  class copy {
    constructor() {}
  }
  let obj;
  function init() {
    obj = new copy();
    return obj;
  }
  return {
    get() {
      if (obj) {
        return obj;
      } else {
        return init();
      }
    },
  };
})();

let test_object = singleton.get();
console.log(test_object);
console.log(Object.getPrototypeOf(test_object));
