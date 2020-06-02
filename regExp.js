
// Написать регулярку на мобильные номера в украине - как в юзер дате
// На email длина емаил 6 - 12 символов до @ и потом выбирите почту маил, гмаил,рамблер

let re = /(^[\w\d]{6,12})+@(mail|gmail|rambler)+\.[a-zA-Z]{2,3}$/;

console.log(re.test('testte5i7@gmail.com'));
console.log(re.test('test@mail.ru'));

let regExp = /((380+50|63|66|67|68|91|92|93|97|96)+\d{7})$/;

console.log(regExp.test('380507487034'));
console.log(regExp.test('380207451214'));
