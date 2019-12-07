'use strict';

var money = +prompt('Ваш бюджет на месяц?', 20000);
var time = prompt('Введите дату в формате YYYY-MM-DD', '1994-19-06');

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: '',
    income:[],
    savings: false
}
var consumption = prompt('Введите обязательную статью расходов в этом месяце', '');
var how = +prompt('Во сколько обойдется?', '');
var consumption2 = prompt('Введите обязательную статью расходов в этом месяце', '');
var how2 = +prompt('Во сколько обойдется?', '');

appData.consumption = how;
appData.consumption2 = how2;

var oneDay = ' бюджет на 1 день ' + appData.budget / 30;

alert(oneDay);



console.log('info');