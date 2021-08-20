// NO 1

let arr = [0, 1, 2, 3, 4, 5 ,6 ,7, 8, 9, 10];
arr.sort(arraySort);
function arraySort (a, b) {
    return a - b;
}
if (arr[0] < 0) {
    console.log(arr[0]);
} else {
    console.log('No negatives');
}

// NO 2

function numberOfString(arr) {
    let string = [];
    let number = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" ) {
            number.push(arr[i]);
        } else {
            string.push(arr[i]);
        }
    }
    let str = string.length;
    let num = number.length;
    console.log(num);
    console.log(str);
}
numberOfString([1, '10', 'i', 2, 3]);

// NO 3

function sunOfArray(arr) {
    let newArr = [];
    for (let  i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let l = 0; l < arr[i].length; l++) {
            sum = sum + arr[i][l];
        }
        newArr.push(sum);
    }
    return newArr;
}
sunOfArray([[1, 2, 3], [3, 5, 6], [-1, 4, -7]]);

// NO 4

function sumLength(arr) {
    let newArr = [];
    let sumOf = [];
    for (let  i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            newArr.push(arr[i]);
        }
    }

    let a = newArr.length;
    for (let l = 0; l < newArr.length; l ++) {
        let c = newArr[l] * a;
        sumOf.push(c);
    }
    return sumOf;
}
sumLength([1, 3, 4, 6, 3]);

// NO 5

function checking(arr) {
    let newArr = [];
    let obj = {};
    for (let  i = 0; i <  arr.length; i ++) {
        if(!obj[arr[i]]) {
            newArr.push(arr[i]);
            obj[arr[i]] = true;
        }
    }
    return newArr;
}
checking([1, 3, 4, 5, 6, 6, 7]);

// NO 6

function arraySum(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length - 1; i++ ) {
        arr[i] = arr[i] * arr[i + 1];
        newArr.push(arr[i]);
    }
    return newArr;
}
arraySum([1, 3, 5, 6]);
