'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', 20000);
    time = prompt('Введите дату в формате YYYY-MM-DD', '1994-19-06');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', 20000);
    }
 }

 start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income:[],
    savings: true
};

function chooseExpenses() {
    for(let i = 0; i < 2; i++){
        let a = prompt('Введите обязательную статью расходов в этом месяце', 'хавка'),
            b = +prompt('Во сколько обойдется?', 500);
    
        if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
        && a != '' && b != '' && a.length == 50){
             console.log('done');
             appData.consumption[a] = b;
         }
    
    }
}

chooseExpenses();

function chooseOptExpenses() {
    for(let i = 1; i < 4; i++){
        let opt = prompt("Статья необязательных расходов?");
        
        appData.optionalExpenses[i] = opt;
    }
}

chooseOptExpenses();

function detectDayBudget() {
    appData.moneyPerDay =( appData.budget / 30 ).toFixed();
    alert('бюджет на 1 день' + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if( appData.moneyPerDay < 100 ){
        console.log('MiN');
    } else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log('MID');
    } else if ( appData.moneyPerDay > 2000 ){
        console.log('BIG');
    }else{
        console.log('ERROR');
    }
}

detectLevel();

function checkSavings() {
    if( appData.savings == true){
        let save = +prompt("Какова сума накоплений?"),
            procent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*procent;
        alert("Доход в месац с вашого депозита: " + appData.monthIncome);
    }
}

checkSavings();

