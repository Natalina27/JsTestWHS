## Вопрос №1 из 14
> Каким видом языка является JavaScript?
>
`интерпретируемым`

>> JavaScript является интерпретируемым языком программирования,
> т.к. для его исполнения достаточно интерпретатора,
> который и будет "читать" код "как есть" без предварительного преобразования компилятором. 

## Вопрос №2 из 14
> Что такое ECMAScript?
>
>> ECMAScript - это стандарт, спецификация,
> описание того, как должен выглядеть язык программирования, 
>а JavaScript - одна из реализаций данной спецификации.

## Вопрос №3 из 14
> Как правильно подключить скрипты к HTML-странице?

>> Внешний js-файл лучше всего подключать в конце тега body 
>во избежание ожидания пользователем долгой загрузки страницы
> (в случае если файл был бы подключен в теге head).

## Вопрос №4 из 14
>  Для чего нужна отладка кода?
>
>> Отладка кода необходима не только для определения места и причины проблемы,
> но и для целостного понимания работы программы/скрипта, а также для того,
> чтобы узнать значения переменных в определённый момент исполнения скрипта.

## Вопрос №5 из 14
> Выберите наиболее подходящее имя для функции, 
>которая возвращает рандомный цвет:
>
>> getRandomColor

## Вопрос №6 из 14
> Дан пример кода. Сработает ли команда alert() и почему?
>
```js
    function getColor() {
      console.log(whiteColor);
        var whiteColor = '#fff';
    }

    getColor();
```
>> выведет undefined как значение переменной whiteColor, 
>т.к. произойдёт всплытие переменной, объявленной с помощью var. 
>>Если переменная была бы объявлена с помощью let или const,
> alert() не сработал бы, а в консоли вывелась бы ошибка
> "whiteColor is undefined".
>Пример кода можно посмотреть тут:
 https://goo.gl/VohfGb
>

## Вопрос №7 из 14
> Что означает тип данных undefined?
>
>> Undefined - это значение переменной по умолчанию,
> до тех пор, пока мы его не определили сами.
> Например, если объявить "let a;" и не положить в "а" никакого значения, 
>то в ней окажется значение undefined. 
>

## Вопрос №8 из 14
> Задание на работу с методами строк.
> Дан пример кода. Что выведется в консоль?
>
```js
 let sentence = 'I like rock and my car is ford';
 let result = sentence.substring(19,20) + sentence.substr(-10,4) + sentence.slice(26);
 console.log(result);
```
>> `car iford` . 
>> substring(k [,m]) ищет подстроку в строке от k до m (исключая m).
substr(f [,d]) ищет подстроку в строке от f на d символов (включая d); если f отрицательное - ищет с конца.
slice(x [,y]) ищет подстроку в строке от x до y, причём позиция y отсчитывается сначала.
Важно: если второй параметр этих методов не указан, т.к. он необязательный, строка копируется до конца.
>Ответ можно посмотреть здесь: 
https://goo.gl/WR6PsN
>


## Вопрос №9 из 14
> Из массива необходимо скопировать элемент, не изменяя исходный массив. 
>Какой метод позволит это сделать?
>
>> `slice()`
>> splice() - вырезает элемент, исходный массив изменяется;
   slice() - копирует элемент, исходный массив сохраняется;
   shift() - удалит первый элемент из массива, исходный массив изменяется.

## Вопрос №10 из 14
> Какая команда позволяет добавить элемент на HTML-страницу?
>
>> `document.createElement()`  - создаст элемент;
>методов addElement() и pushElement() у объекта document не существует ;)
>

## Вопрос №11 из 14
> Что появилось раньше: ES-2015 или ES6?

>> ES-2015 и ES6 - обозначение одного и того же стандарта ECMA Script, 
>который вышел в 2015 году.

## Вопрос №12 из 14
> Задание на понимание setTimeout. В каком порядке выполнится вывод в консоль?

```js
setTimeout(
    function() {
        console.log("MR");
    setTimeout(
        function() {
                console.log("David");
}, 2000

);
      
    },2000
);
console.log("Bye");
```
>> Первой выполнится самый последний вывод в консоль "Bye", т.к. там нет задержки.
> Затем, через 2 секунды появляется "MR", 
>т.к. это первая строчка в колбеке в внешнего setTimeout.
> Через следующие 2 секунды в консоль выведется "David", 
>т.к. это колбек внутреннего setTimeout.
>

## Вопрос №13 из 14
> Задание на понимание замыкания. Что выведется в консоль?
   Демо можно посмотреть здесь: https://goo.gl/ukzTxv

```js
function myFunc(x) {
  return function(y) {
    return Math.pow(x, y);
  }
}

console.log(myFunc(3)(2));
```
>> `9`
>> В консоли окажется число 9, 
>т.к. во-первых, метод pow(x, y) у объекта Math возводит число x в степень y. 
  Во-вторых, переменные x и y находятся в замыкании, оказавшись там на моменте их объявления, а не на моменте их вызова.
  Демо можно посмотреть тут: 
> https://goo.gl/yxJuKK
>

## Вопрос №14 из 14
> Что выведется в консоль?

```js
let FRAMEWORK = "framework";
console.log ( FRAMEWORK === "FRAMEWORK");
```
`false` 
>> По типу данных значения равны (строки), 
>но из-за разного регистра символов выведется false.
