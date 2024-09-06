let divisiblePor3 = "Fizz";
let divisiblePor5 = "Buzz";

for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(divisiblePor3 + divisiblePor5);
    } else if (i % 3 == 0) {
        console.log(divisiblePor3);
    } else if (i % 5 == 0) {
        console.log(divisiblePor5);
    } else {
        console.log(i);
    }
}