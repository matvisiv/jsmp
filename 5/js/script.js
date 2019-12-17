'use strict';

let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    adv = document.querySelector('.adv'),
    column = document.querySelectorAll('.column'),
    title = document.querySelector('#title'),
    body = document.querySelector('body'),
    liFifth = document.createElement('li'),
    liSecond = document.createElement('li'),
    promp = document.querySelector('#prompt');


liFifth.classList.add('menu-item');
liSecond.classList.add('menu-item');
liFifth.textContent = 'Пятий пункт';
liSecond.textContent = 'Второй пункт';

menu.removeChild(menuItem[2]);
menu.appendChild(liFifth);
menu.insertBefore(liSecond, menuItem[1]);
column[1].removeChild(adv);
body.style.backgroundImage = 'url(/5/img/apple_true.jpg)';
title.innerHTML = 'Мы продаем только подлинную технику Apple';


let ans = prompt('Отношение к технике apple??', 'норм');
promp.innerHTML = ans;



