// NO 1
function spliceArr(arr) {
    arr.splice(0, 1);
    console.log(arr);
}
spliceArr([30,20,3]);

//NO 2

function flattenArray(arr,newArr = []) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            newArr.push(arr[i]);
        } else {
            flattenArray(arr[i],newArr);
        }
    }
    return newArr;
}

flattenArray([1, 3, 4, [[1], 3], 2, [4], 5]);

// //NO 3

function sumOfNumber(number) {
    if (number < 10) return number;

    let c = 0;

    while (number > 0) {
        c = c + (number % 10);
        number = Math.floor(number / 10);
    }

    return sumOfNumber(c);
}
sumOfNumber(1234);

//NO4

function reversObj(obj) {
    let newObj = {};

    for(let key in obj) {
        if(newObj[obj[key]]) {
            if (Array.isArray(newObj[obj[key]]) ) {
                newObj[obj[key]].push(key);
            } else {
                newObj[obj[key]] = [newObj[obj[key]], key];
            }
        } else newObj[obj[key]] = key;
    }
    return newObj;
}
reversObj({a: 2, b: 3, c: 4, d: 4, e: 4 });
