//NO1
function fibonacci(f) {
    let a = 0;
    let b = 1;
    let arrFib = [];
    for (let i = 0;i < f; i++) {
        i = a + b;
        a = b;
        b = i;
        arrFib.push(i);
    }
    console.log(arrFib);
}
fibonacci(12);

//NO 2
function writtenNumber() {
    let a;
    let arr = [];
    for (let i = 0; i < 100; i ++) {
        if (i < 10) {
            a = "0" + i;
        } else {
            a = i;
        }
        arr.push(a);
    }
    console.log(arr);
}
writtenNumber();
// NO 3

function attempt(a) {
    let arr = [];
    while (a < 0) {
        let c = a % 10;
        arr.push(c);
        Math.floor(a);
    }
    arr.sort();
    let first = arr[0];
    let last = arr.length - 1;
    let sum = first + last;
    let product = last * first;
    let division = product / sum;
    if (product % sum === 0) {
        console.log(division);
    } else {
        console.log( 'Can not be ..');
    }
}
attempt(2345);

// NO 4
function checking(arr) {
    let max = -Infinity;
    let min = Infinity;
    let isFound = false

    for (let i = 0; i <= arr.length; i++) {
        if (max <= arr[i]) {
            max = i;
        }
        if (min >= arr[i]) {
            min = i;
        }
    }

    let diff = max - min;
    arr.forEach(item => isFound = item === diff)

    return isFound;
}

checking([40, 30, 20, 15]);


//NO 5
function biggest (arr) {
    arr.sort();
    let bigNumber = arr.length;
    console.log(arr[bigNumber - 2]);
}
biggest([1, 3 ,5, 6, 9]);

//NO 6

