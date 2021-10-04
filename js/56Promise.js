"use strict";

console.log("Запрос данных...");
const req = new Promise(function (resolve, reject){
    setTimeout(() => {
        console.log('Подготовка данных...');
        const product ={
            name: 'TV',
            price: 2000
        };
        resolve(product);

    }, 2000);
});
req.then((product) => {
    //console.log('Данные получены');
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            product.status = 'order';
            //reject();
            resolve(product);
        }, 2000);   
    });
}).then(date =>{
    date.modify = true;
    return date;
}).then(date => {
    console.log(date);
}).catch(() => {
    console.error('Произошла ошибка');
}).finally(() => {
    console.log('finally');//можно поместить очистить форму
});


const test = time => {
    return new Promise(resolve =>{
        setTimeout(() => resolve(), time);
    });
};

test(1000).then(() => console.log('1000ms'));
test(2000).then(() => console.log('2000ms'));

Promise.all([test(1000),test(2000)]).then(() => {
    console.log('All');
});
Promise.race([test(1000),test(2000)]).then(() => {
    console.log('All');
});