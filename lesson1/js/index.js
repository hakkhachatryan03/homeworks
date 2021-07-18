//N.1
let a = 5;
let b = 10;
if (a % b === 0 || b % a === 0) {
   console.log(1);
} else {
   console.log(0);
}
//N.5
let arr = [40, 50, 60, 70, 24]
arr.map(i=>x+=i, x = 0);
(5) [40, 90, 150, 220, 244]
arr.map(i=>x+=i, x = 0).reverse();
arr.map(i=>x+=i, x = 0).reverse()[0];
244
arr.map(i=>x+=i, x = 0).reverse()[0]/arr.length;

//N.7
mounth = +prompt("mounth = ");
ear = +prompt("ear = ");
function age() {
   if (mounth < 8 && ear == 0) {
      console.log("bayb");
   } else if (mounth > 0 && ear > 0 && ear < 7) {
             console.log("sred");
          } else if (mounth > 0 && ear > 7 && ear < 18 ) {
                    console.log("hamarya chapahas");
                 }
} 
/* */
a = +prompt('a = ');
if (typeof(a) == number) {
    console.log('a');
} else {
   console.log("a is not number");
}

/* NO.6*/
let a = +prompt("a = ");
if (a % 3 === 0 && a % 5 === 0 && a % 7 === 0) {
   console.log("bajanvum e 3, 5 ,7");
} else if (a % 3 === 0 && a % 5 === 0) {
       console.log("3, 5");
} else if (a % 3 === 0 && a % 7 === 0) {
      console.log("3, 7");
} else if (a % 5 === 0 && a % 7 === 0) {
     console.log("5, 7");
} else if (a % 5 === 0) {
    console.log("5-i");
} else if (a % 3 === 0) {
    console.log("3-i ");
} else if (a % 7 === 0) {
    console.log("7-i");
} else {
  console.log("chkpav");
}
/* */ 
let a = +prompt("a = " );
let b = Math.pow(a, 2);
let c = Math.pow(a, 3);
let z  = a + b + c;
console.log(z);






//work NO2\\
/*NO 1*/
let arr = [40, 50, 23, 70, 24]
 arr.sort();

 /*NO2*/
 let a = +prompt("a = ");
let b = +prompt("b = ");
let c = +prompt("c = ");
if ((a + b + c)/3 > 40) {
    console.log('Passed');
} else {
  console.log('No Passed');
}
// N0 5
let hight = +prompt("hight = ");
let himq = +prompt("humq = ");
let makeres = 0.5 * himq * hight;
console.log(makeres);

/*NO3*/
let b = +prompt("b = ");
let c = +prompt("c = ");
let z = Math.pow(b, 2);
let d = z - 4 * a * c;
if (d > 0) {
    console.log("erku armat");
} else if(d = 0) {
    console.log("mek armat");
} else if (d < 0) {
   console.log("chkpav");
}

//homewoerk 3//
/*NO 5 */
let arr = [40, -50, -60, -70, 24]
let b = arr.map(i=>x+=i, x = 0).reverse()[0];
if (b < 0) {
   b = b * -1;
} 
console.log(b);
 
// NO 2
function argOfFolter (arr) {
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
argOfFolter([8, 0, 1, 'hey', 12, 5 , true, '2', null, 7, 3]);

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

//NO6

function output(arr) {
   let multip = [];
   for (let i = 0; i <= arr.length - 2; i++) {
       multip.push(arr[i] * arr[i + 1]);
   }
   return multip;
}
output([1, 3, 5, 7, 9]);

//HomeWoerk[4]
//No 4
arr = [1, 2, 3, 4, 5, -4];
arr.sort();
if (arr[0] < 0) {
   console.log("falce");
} else {
   console.log('true');
  }