//NO 1
function  comparison(arr, number) {
    let arrNew = [];
    for (let i = 0; i <= arr.length; i++) {
        if(arr[i] > number) {
            arrNew.push(arr[i]);
        }
    }
    console.log(arrNew);
}
comparison([1, 25, 3, 45, 2, 5], 12);

//NO2

 let firstNumber = +prompt("firstNumber = ");
 let lastNumber = +prompt("lastNumber = ");
 for (let i = firstNumber; i < lastNumber; i++ ) {
     if (i % 2 === 0) {

     }
 }


// NO 3;

function checkNumber(number) {
    while (number <= 0) {
        let c = number % 2;
        Math.floor(number);
        if (c === 0) {
            console.log('falce');
            break;
        }
    }
}
checkNumber(32335);

//NO4
function chechking(arr) {
    arr.sort();
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] >= 0) {
            console.log(arr[i]);
            break;
        } else {
            console.log('-1');
        }
    }
}
chechking([12, 34, -1, 2, -124, 0]);

//NO5

function arraySort(arr) {
    let c = -1;
    for (let i = 0; i <= arr.length; i++ ) {
        if (arr[i] < arr[i - 1]) {
            c = arr[i];
            break;
        }
    }
    return c;
}
arraySort([10, 20 ,30 ,1, 40]);
