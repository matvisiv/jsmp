'use strict';

let money = +prompt('Ваш бюджет на месяц?', 20000);
let time = prompt('Введите дату в формате YYYY-MM-DD', '1994-19-06');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: '',
    income:[],
    savings: false
};

// for(let i = 0; i < 2; i++){
//     let a = prompt('Введите обязательную статью расходов в этом месяце', 'хавка');
//     let b = +prompt('Во сколько обойдется?', 500);

//     if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
//      && a != '' && b != '' && a.length == 50){
//          console.log('done');
//          appData.consumption[a] = b;
//      }

// }

// while(let i = 0; i < 2; i++){
//     let a = prompt('Введите обязательную статью расходов в этом месяце', 'хавка');
//     let b = +prompt('Во сколько обойдется?', 500);

//     if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
//      && a != '' && b != '' && a.length == 50){
//          console.log('done');
//          appData.consumption[a] = b;
//      }
// }

// var i = 0;
// do{
//     i++;
//     let a = prompt('Введите обязательную статью расходов в этом месяце', 'хавка');
//     let b = +prompt('Во сколько обойдется?', 500);

//     if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
//      && a != '' && b != '' && a.length == 50){
//          console.log('done');
//          appData.consumption[a] = b;
//      }
// }while(i < 2);


appData.moneyPerDay = appData.budget / 30;

alert('бюджет на 1 день' + appData.moneyPerDay);

if( appData.moneyPerDay < 100 ){
    console.log('MiN');
} else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log('MID');
} else if ( appData.moneyPerDay > 2000 ){
    console.log('BIG');
}else{
    console.log('ERROR');
};





