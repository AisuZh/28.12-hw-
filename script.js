// task 1  Напишите функцию, которая принимает массив чисел, строк и булеан если тип булеан сделайте противоположное значение.

// принимаем let arr = [1,2,3,4,”string”, “hello”, true, false] 

// получаем let newArr = [1,2,3,4,”string”, “hello”, false, true]

// let arr = [1,2,3,4, "string", "hello", true, false]
// let newArr = arr.map ((el) => {
//     if (typeof el === "boolean"){
//         return !el
//     } else {
//         return el
//     }
// })
// console.log(newArr)



// task 2

// Напишите функцию, которая принимает строку и повторяем каждый ее символ 2 раза.
//     Пример входных данных: "test"
//     Результат: "tteesstt"

// let str =  "test"
// let arr = str.split("")
// let newArr = arr.map ((el) => {
//     return el + el
// }) .join("")
// console.log(newArr)


// task 3
// Напишите функцию, которая принимает строку и выводит индекс каждого символа

// let str = "hello"
// let arr = str.split ("")
// let newArr = arr.map ((el,idx) => {
//     return idx
// })
// console.log(newArr)


// task 4
// Напишите функцию которая принимает массив с четными и нечетными числами
// и возвращает вместо четных “четное” вместо нечетных “нечетное”

// let arr = [1,2,3,4,5,6]
// let newArr = arr.map ((el) => {
//     if (el % 2 === 0) {
//         return "четное"
//     } else {
//         return "нечетное"
//     } 
// })
//     console.log(newArr)




// task 5
// Напишите функцию которая принимает строку “головоломка” и заменяет все буквы “o” на  “a”

// let str = "головоломка"
// let newStr = str.replaceAll("о", "а")
// console.log (newStr)


// task 6
// Напишите функцию которая принимает строку “           hello world.        ” и удаляет отступы по краям

// let str = "         hello world.        "
// console.log(str.trim())




// task 7

// напишите функцию которая принимает массив [1,2,3,4,5,6,7,8] и выводит “четное” 
// если число четное “нечетное” если число нечетное. Используйте тернарное выражение


// let arr = [1,2,3,4,5,6,7,8]

// let newArr = arr.map ((el) => {
//     return el % 2 === 0 ? `${el} четное`: `${el} нечетное`
// })
// console.log (newArr)



// task-8

//  Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль первую букву каждого слова строки в верхний регистр.
// let str = 'Максимально Ужасно'
// let arr = str.split(" ")
// let newArr = arr.map ((el) => {
//     return el [0]. toUpperCase()
// })
// console.log (newArr)


// let str = 'Максимально Ужасно'
// let arr = str.split(" ")
// let newArr = arr.map ((el) => {
//     return `${el[0].toUpperCase()}${el.slice(1)}`
// })
// console.log (newArr)


// let str = 'Максимально Ужасно'
// function ucfirst(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }
// console.log(str)



// task-8

//  Вам дана переменная str = 'Максимально Ужасно, переделывай'.
//     Выведите в консоль все слова этой строки, используя метод split. Пример: [ 'Максимально' 'ужасно', 'переделывай'. ]

// let str = 'Максимально Ужасно, переделывай'
// let newStr = str.split (" ")
// console.log(newStr)