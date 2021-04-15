// function makeMessage (name, price) {
//     // Пиши код ниже этой строки
//      const message = `Вы выбрали ${name}, цена за штуку ${price} кредитов.`;
   
//     // Пиши код выше этой строки
//     return message;
//   };
//   console.log(makeMessage('Радар', 6150));
//   console.log(makeMessage('Сканер', 3500));
//   console.log(makeMessage('Реактор', 8000));
//   console.log(makeMessage('Двигатель', 4070));

// function makeMessage (name, price) {
//   // Пиши код ниже этой строки
//    const message = `Вы выбрали ${name}, цена за штуку ${price} кредитов`;
//   // Пиши код выше этой строки
//   return message;
  
// };
// function makeMessage (name, price) {
//   // Пиши код ниже этой строки
//    const message = `Вы выбрали ${name}, цена за штуку ${price} кредитов`;
  
//   // Пиши код выше этой строки
//   return message;
// };
// makeMessage('Радар', 6150);


// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки
// if(available >= ordered) {
// message = 'Заказ оформлен, с вами свяжется менеджер.';
// } else {
// message = 'На складе недостаточно товаров!';
// }
//   // Пиши код выше этой строки
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки
// if(available < ordered) {
//   message = 'На складе недостаточно товаров!';
// } else {
//   message = 'Заказ оформлен, с вами свяжется менеджер';
// }
//   // Пиши код выше этой строки
//   return message;
// }

// задача 18(1)

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Пиши код ниже этой строки
// const totalPrice = pricePerDroid * orderedQuantity;
//   if(totalPrice > customerCredits) {
//  message  = 'Недостаточно средств на счету!'
//   } else {
//   const balance = customerCredits - totalPrice;
//   message = `ВЫ купили ${orderedQuantity} дроидов, на счету осталось ${balance} кредитов. `}
//   // Пиши код выше этой строки
//   return message;
// }
// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

// задача 18(2)

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Пиши код ниже этой строки
// const totalPrice = pricePerDroid * orderedQuantity;

//   if(totalPrice > customerCredits) {
//   message = 'Недостаточно средств на счету!'
//   } else {
//     let balance = customerCredits - totalPrice;
//    message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${balance} кредитов`}
//   // Пиши код выше этой строки
//   return message;
// }

// задача 19

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Дополни эту строку
//     message =  'Отменено пользователем!';
//   } else if (password === ADMIN_PASSWORD) { // Дополни эту строку
//     message = 'Добро пожаловать!';
//   } else {
//     message = 'Доступ запрещен, неверный пароль!';
//   }

//   return message;
// }

// задача 20
// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки
//    if (ordered === 0){
   
//    message = 'В заказе еще нет товаров';
   
//    } 
//   else if (ordered > available) {
  
//   message = 'Слишком большой заказ, на складе недостаточно товаров!';
  
//   } else {
  
//   message = 'Заказ оформлен, с вами свяжется менеджер'}
//   // Пиши код выше этой строки
//   return message;
// }