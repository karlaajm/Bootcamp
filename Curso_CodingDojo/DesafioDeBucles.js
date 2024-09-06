for (let i = 1; i <= 30; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

for (let i = 100; i >= 0; i--) {
    if (i % 4 == 0) {
        console.log(i);
    }
}

var sum = 13;
for (let j = 0; j < 6; j++) {
    sum = sum - 3;
    console.log(sum);
}
var sumatoria = 0;
for (let j = 1; j <= 50; j++) {
    if (j % 2 == 0) {
        sumatoria = sumatoria + j;
    }
}
console.log(sumatoria);

var factorial = 1;
for (let k = 1; k <= 20; k++) {
    factorial = factorial * k;
}
console.log(factorial);