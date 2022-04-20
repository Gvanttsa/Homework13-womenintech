//1
let user = {
    firstname: 'giorgi',
    lastname: 'smith',
    age: 25,
    studentstatus: 'active'
}

console.log (user.studentstatus);

//2
let numbers = [5, 4, 9, 12,];

// for (let i = 0; i < numbers.length; i++) {
//     console.log (numbers[i])
// }

for (let item of numbers) {
    console.log (item);
}

let x = 0;
while (x < numbers.length) {
    console.log (numbers[x]);
    x++
}

//3
let numbers1 = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36,89];

for ( let elements of numbers1) {
    if (elements > 5) {
        console.log (elements);
    }
}

//4
let user1 = {
    name: 'giorgi',
    age: 20,
    studentstatus: 'active'
}

if (user1.age < 18 && user1.studentstatus =='active') {
    console.log ('hello');
} else if (user1.name == 'giorgi') {
    console.log ('hello giorgi')
} else if (user1.studentstatus == 'active' || user.age < 25) {
    console.log ('hello world');
} else {
    console.log('error');
}

//5
let array = ['watermalon', 'pear', 10, 45, 50, 'apple', 'ananas'];

for (let item of array) {
    if (typeof item == 'string') {
        console.log (item);
    }
}

//6
// let array1 = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]

// for (let item of array1) {
//     for (let item of x) {
//         if ( item > 0) {
//             console.log(item);
//         }
//     }
// }

//7
let array2 = [32, 10, 'hello', null, 'hello2', 50]

for (let item of array2) {
    if (item % 5 == 0) {
        console.log(item);
    }
}

//2.1
function test (...args) {
    let numbersum = 0;

    for (let item of args) {
       if (item > 0) {
           numbersum +=item;
       }
    }
    return numbersum;

}

let result = test (2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log (result);

//2.2

function sum (...args1) {
    let sumnumber = 0;

    for (let item of args1) {
        
        sumnumber +=item;
    }
    return sumnumber;
}

let result2 = sum (10, 50, 6, 7, 8, 11, 6, 3, 9)
console.log(result2);

//2.3
let user3 = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }

  function user3 () {

  }


  //2.4
  function test1 () {
      
  }