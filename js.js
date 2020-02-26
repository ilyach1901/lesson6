var Name = prompt('Введите Имя');
var currentYear = +prompt('Введите Сегоднешний Год');
var myYear = +prompt('Введите Ваш Год Рождения');

console.log(Year(myYear, currentYear, Name));
function Year(a, b, c = '') {
    return c + ', Ваш Возраст ' + (b - a);
}
