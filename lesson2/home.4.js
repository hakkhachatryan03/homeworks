//NO 1

function BiggestAdjacent(arr) {
    let a = 0;
    let newArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        a = arr[i] * arr[i + 1];
        newArr.push(a);
    }
    newArr.sort(killer);
    function killer(a, b) {
        return a - b;
    }
    newArr.reverse();
    return newArr[0];
}
BiggestAdjacent([1, 3, 4, 5, 6 ,7]);

//NO 2

function lastAndFirst(arr) {
    arr.sort(killer);
    function killer(a, b) {
        return a - b;
    }
    let a = arr.length - 2;
    return a;
}
lastAndFirst([1, 3, 4, 5, 6]);
