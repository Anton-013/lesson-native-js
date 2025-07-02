//примитивы
//string, number, boolean, null, undefined, symbol, BigInt

//ссылочные типы данных
//object, array, function/class,  map, set


// создание объекта
const user = {} //литерал объекта

// создание объекта с помощью конструктора Object
let person = new Object();
person.name = 'John';
person.age = 30;
console.log('person obj', person)

/////////////////////////////////////////////////////////////////////////////////////////////////

let user1 = {
    name: 'Bob',
    age: 32,
    isStudent: false,
}
const user2 = user1
user2.name = 'Alex'
console.log(user1.name) // Алекс потому что, две переменные хранят ссылку на один объект.

////////////////////////////////////////////////////////////////////////////////////////////

let user3 = {
    name: 'Bob',
    age: 32,
    isStudent: false,
}

const user3Copy = {
    name: user3.name,
    age: user3.age,
    isStudent: user3.isStudent,
}

console.log(user3 === user3Copy) // здесь у нас false так как разные ссылки на ячейки памяти

/////////////////////////////////////////////////////////////////////////////////////////


// создаём копию =>
// вносим в неё изменения =>
// используем копию дальше


// как сделать копию
// v1
const userCopy = {
    name: user.name,
    age: user.age,
    isStudent: user.isStudent,
    age: 33, // меняем на 33
}
// v2
const userCopy2 = { ...user, age: 33 } // спред оператор (делаем копию) + меняем age на 33



// Деструктуризация объекта
const person = {
    name: 'Kirill',
    age: 24,
    address: {
        country: 'Poland',
        city: 'Warsaw',
    },
}

// Деструктуризация объекта, с использованием собственных имен переменных
const { name: newName, age, car = 'Машины нет' } = person

// newName - новое имя переменной для свойства name
// age - используется без изменений
// car - используется с значением по умолчанию 'Машины нет', если свойство car отсутствует в объекте person

console.log(newName, age, car)

// Без деструктуризации
const person = { name: 'John', age: 30 }
const name1 = person.name
const age1 = person.age

// С деструктуризацией
const { name, age2 } = { name: 'John', age: 30 }





// CRUD

const users = []

// Creat
// Read
// Update
// Delete

// add user

const newUser = {
    id: 5,
    name: 'Vlad',
    isStudent: true,
}

const copyUsers = [...users, newUser]

// delete user id = 2

const copyUsers2 = copyUsers.filter(user => user.id !== 2)

// update id = 5 'Vlad' > 'Elvin'

const copyUser3 = copyUsers.map(el => el.id === 5 ? { ...el, name: 'Elvin' } : el)





structuredClone() // функция для создания полной копии объекта

