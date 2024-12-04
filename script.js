/*
 !!!!!!!!!!!!!!!! dojo 1 !!!!!!!!!!!!!!!!!!!!!!!!


function sayHello (firstName) {

    if (firstName != null) {
        console.log(`hello ${firstName}`);
    } else {
        console.log("Hello World");
    }
}

sayHello();
*/

// !!!!!!!!!!!!!! dojo 2 !!!!!!!!!!!!!!!

// function fizzBuzz (number) {
//     if (number%3 === 0) {
//         if (number%5 === 0) {
//             console.log("FizzBuzz");
//         } else {
//             console.log("Fizz");
//         }
//     } else if (number%5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log("Aucun multiple");
//     }
// }

// fizzBuzz("jkh")


// !!!!!!!!!!!!!! dojo 3 !!!!!!!!!!!!!!!


//const array = [8, 7, -9, -6, -2, 45];

// !!!!!!!!!!!!!! Solution Téo !!!!!!!!!!!!!!
//const positiveNumber = array.filter((elem) => elem > 0);
//const negativeNumber = array.filter((elem) => elem < 0);
//console.log(positiveNumber)
//
//const positiveNumberChange = positiveNumber.map((elem) => -Math.abs(elem))
//console.log(positiveNumberChange)
//
//const negativeNumberChange = negativeNumber.map((elem) => +Math.abs(elem))
//console.log(positiveNumberChange)
//
//const finalArray = negativeNumberChange.concat(positiveNumberChange)
//console.log(finalArray)

// const inverse = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         positiveNumberChange
//     }
// };


// !!!!!!!!!!!!!! Solution Paul !!!!!!!!!!!!!!
// function inverse(arrayNumber) {
//     for (let i = 0; i < arrayNumber.length; i++) {
//         if (arrayNumber[i] > 0) {
//             let a = 0
//             let b = arrayNumber[i]
//             while (b != 0) {
//                 b--
//                 a--
//             }
//             arrayNumber.splice(i, 1, a);
//         }
//         else if (arrayNumber[i] < 0) {
//             let a = 0
//             let b = arrayNumber[i]
//             while (b != 0) {
//                 b++
//                 a++
//             }
//             arrayNumber.splice(i, 1, a);
//         }
//     }
//     return arrayNumber
// }
// console.log(inverse(array))

// !!!!!!!!!!!!!! Solution Adrien !!!!!!!!!!!!!!
// function inverse(array) {
//     // Vérifie si l'argument est null ou un tableau vide
//     if (!array || array.length === 0) {
//         return [];
//     }
//
//     // Retourne un nouveau tableau avec les inverses
//     return array.map(num => -num);
// }

//!!!!!!!!!!!!!!!!! dojo 4 !!!!!!!!!!!!!!!!!!
// const array = [8, 7, 9, 6, 2, 45];
// function oddArray (arrayToOdd) {
//     const arrayOdd = arrayToOdd.filter((elem) => (elem%2) )
//     return arrayOdd;
// }

// console.log(oddArray(array));