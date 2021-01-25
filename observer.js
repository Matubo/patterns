//наблюдатель позволяет следить за изменениями связывая данные от одного ко многим
//(например пользовательского ввода)

function EventObserver() {
  this.observers = [];
  this.subscribe = (fun) => {
    this.observers.push(fun);
  };
  this.unsubscribe = (fun) => {
    this.observers = this.observers.filter((item) => item !== fun);
  };
  this.executeAll = () => {
    this.observers.forEach((fun) => fun());
  };
}

function testfun1() {
  console.log("testfun1");
}
function testfun2() {
  console.log("testfun2");
}

let test = new EventObserver();
test.subscribe(testfun1);
test.subscribe(testfun2);
test.executeAll();
test.unsubscribe(testfun1);
test.executeAll();
