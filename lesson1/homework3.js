//NO 1

arr = ['we have a'];
let first = 'Houston';
let last = 'Prblem';
arr.push('last');
arr.unshift('first');
console.log(arr);

// NO 2
function argOfFilter (arr) {
    let arrCheck = arr.filter(item => typeof item === 'number');

    let arrOdd = [];
    let arrEven = [];
    for (let i = 0; i <= arrCheck.length; i++) {
        if (i % 2 === 0) {
            arrOdd.push(arrCheck[i]);
        } else {
            arrEven.push(arrCheck[i]);
        }
    }
    let arrSum = arrOdd.concat(arrEven);
    console.log(arrSum);
}
argOfFilter([8, 0, 1, 'hey', 12, 5 , true, '2', null, 7, 3]);

//NO3
let numbersCount = 0;
let stringCount = 0;
function Areange(arr) {
    for (let i = 0; i <= arr.length - 1; i++ ) {
        if (typeof arr[i] === 'number') {
            numbersCount++;
        } else {
            stringCount++;
        }
    }

    return 'Numbers:' + numbersCount + ' Strings:' + stringCount
}

Areange([2, 4, 'him', 'she', '12', 4]);

//NO4
function sumArr(arr) {
    let b = arr.map(i => i.length);
    let max = b[0];
    let min = b[0];

    for (let i = 1; i <= b.length - 1; i++) {
        if(b[i] > max) {
            max = b[i];
        }

        if (b[i] < min) min = b[i]
    }

    return min + max;
}
sumArr(['wish', 'slightly', 'understand', 'longer','unexpected', 'heart']);
/*NO 5 */
let arr = [40, -50, -60, -70, 24]
let b = arr.map(i=>x+=i, x = 0).reverse()[0];
if (b < 0) {
    b = b * -1;
}
console.log(b);
//NO6

function output(arr) {
    let multip = [];
    for (let i = 0; i <= arr.length - 2; i++) {
        multip.push(arr[i] * arr[i + 1]);
    }
    return multip;
}
output([1, 3, 5, 7, 9]);
