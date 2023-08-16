let calculator = {
  read(a, b) {
    if( typeof(a)==='number' && !isNaN(a) && isFinite(a) ) calculator.a = a;
    else throw new Error1 ('Переменные должны быть конечными ЧИСЛАМИ!');
    if( typeof(b)==='number' && !isNaN(b) && isFinite(b) ) calculator.b = b;
    else throw new Error1 ('Переменные должны быть конечными ЧИСЛАМИ!');
  },
  sum() {
    if('a' in calculator && 'b' in calculator) return calculator.a + calculator.b;
    throw new Error2 ('Сперва нужно передать в функцию 2 числа: read(x, y)');
  },
  mul() {
    if('a' in calculator && 'b' in calculator) {
      if(calculator.a * calculator.b > 0) return calculator.a * calculator.b;
      else return -1 * calculator.a * calculator.b;
    }
    throw new Error2 ('Сперва нужно передать в функцию 2 числа: read(x, y)');
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
