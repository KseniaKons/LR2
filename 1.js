console.log("Задание №1 \n");
let a, b, c, d, A, B, C, D;
a = 3;
b = -15;
c = -100
d = 0;
function absValue(f) {
    if (f < 0) {
        f = f * (-1);
    }
    return f;
}
A = absValue(a);
B = absValue(b);
C = absValue(c);
D = absValue(d);
console.log("Модуль числа " + a + " = " + A);
console.log("Модуль числа " + b + " = " + B);
console.log("Модуль числа " + c + " = " + C);
console.log("Модуль числа " + d + " = " + D);