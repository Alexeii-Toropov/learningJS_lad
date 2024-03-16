// Работа с if-else
/*1  Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.*/
console.log('Работа с if-else');
console.log('1');
let a = [1, 0, -3];
a.forEach(element => {
    if (element == 0) console.log('Верно'); 
    else console.log('Неверно');
});
console.log('2');
/*2 Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3. */
a.forEach(element => {
    if (element > 0) console.log('Верно'); 
    else console.log('Неверно');
});
console.log('3');
/*Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3. */
a.forEach(element => {
    if (element < 0) console.log('Верно'); 
    else console.log('Неверно');
});
console.log('4');
/*Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3. */
a.forEach(element => {
    if (element >= 0) console.log('Верно'); 
    else console.log('Неверно');
});
console.log('5');
/*Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3. */
a.forEach(element => {
    if (element <= 0) console.log('Верно'); 
    else console.log('Неверно');
});
console.log('6');
/* Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3. */
a.forEach(element => {
    if (element != 0) console.log('Верно'); 
    else console.log('Неверно');
});
console.log('7');
/*Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3. */
let a1 = ['test', 'тест', 3]
a1.forEach(element => {
    if (element == 'test') console.log('Верно'); 
    else console.log('Неверно');
});
console.log('8');
/*Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3. */
let a2 = ['1', 1, 3]
a2.forEach(element => {
    if (element === '1') console.log('Верно'); 
    else console.log('Неверно');
});
console.log('Работа с логическими переменными');
console.log('1 длинная запись');
/*Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной. */
let test = [true, false]
test.forEach(element => {
    if (element == true) console.log('Верно');
    else console.log('Неверно');
});
console.log('1 короткая запись');
let test1 = [true, false]
test1.forEach(element => {
    element == true ? console.log('Верно') : console.log('Неверно');
});
console.log('2 длинная запись');
/*Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной. */
let test2 = [true, false]
test2.forEach(element => {
    if (element != true) console.log('Верно');
    else console.log('Неверно');
});
console.log('2 короткая запись');
let test2_2 = [true, false]
test2_2.forEach(element => {
    element != true ? console.log('Верно') : console.log('Неверно');
});
console.log('Работа с && (и) и || (или)');
/*Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2. */
console.log('1');
let a_3_1 = [5, 0, -3, 2]
a_3_1.forEach(element => {
    if (element > 0 && element < 5) console.log('Верно');
    else console.log('Неверно');
});
console.log('2');
/*Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2. */
a_3_1.forEach(element => {
    if (element == 0 || element == 2) element += 7;
    else element /= 10;
    console.log(element);
});
console.log('Задание 3');
/*Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5. */
let a_3_3 = [1, 0, 3];
let b_3_3 = [3, 6, 5];
let count_3_3 = 0;
while (count_3_3 < 3) {
    if (a_3_3[count_3_3] <= 1 && b_3_3[count_3_3] >= 3) console.log(a_3_3[count_3_3] + b_3_3[count_3_3]);
    else console.log(a_3_3[count_3_3] - b_3_3[count_3_3]);
    count_3_3++;
}
console.log('Задание 4');
/*Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'. */
let a_3_4 = 1;
let b_3_4 = 14;
if ((a_3_4 > 2 && a_3_4 < 11) || (b_3_4 >= 6 && b_3_4 < 14)) console.log('Верно');
else console.log('Неверно');
console.log('На switch-case');
/*Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case. */
let num = [1, 2, 3, 4];
let result = [];
num.forEach(element => {
    switch (element) {
        case 1:
            result[element-1] = 'зима';
            break;
        case 2:
            result[element-1] = 'весна';
            break;
        case 3:
            result[element-1] = 'лето';
            break;
        case 4:
            result[element-1] = 'осень';
            break;
        default:
            break;
    }
});
console.log(result);
console.log('Общие задачи');
console.log('Задача 1');
/* В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью). */
let day = (Math.random() * (31 - 1) + 1).toFixed(0);
console.log('День - ' + day);
if (day >= 1 && day <= 10) console.log('1 декада');
else if (day > 10 && day <= 20) console.log('2 декада');
else console.log('3 декада');
console.log('Задача 2');
/*В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень). */
let month = (Math.random() * (12 - 1) + 1).toFixed(0);
console.log('Месяц - ' + month);
if (month == 12 || month == 1 || month == 2) console.log('зима');
else if (month >= 3 && month <= 5) console.log('весна');
else if (month >= 6 && month <= 8) console.log('лето');
else console.log('осень');
console.log('Задача 3');
/*Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'. */
let stroka = 'abcde';
let result_3;
for (let i = 0; i < stroka.length; i++) {
    if (stroka[0] == 'a') result_3 = 'да';
    else result_3 = 'нет';
}
console.log(result_3);
console.log('Задача 4');
/*Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'. */
let stroka_4 = '12345';
let result_4;
for (let i = 0; i < stroka_4.length; i++) {
    if (stroka_4[0] == '1' || stroka_4[0] == '2' || stroka_4[0] == '3') result_4 = 'да';
    else result_4 = 'нет';
}
console.log(result_4);
console.log('Задача 5');
/*Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий. */
let str_number = '123';
let summa = 0;
for (let i = 0; i < str_number.length; i++) {
    summa += Number(str_number[i]);
}
console.log('Сумма = ' + summa);
console.log('Задача 6');
/* Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'. */
let str_number_6 = '123456';
let summa1 = 0;
let summa2 = 0;
for (let i = 0; i < 3; i++) {
    summa1 += Number(str_number_6[i]);
}
for (let i = 3; i < 6; i++) {
    summa2 += Number(str_number_6[i]);
}
if (summa1 == summa2) console.log('да');
else console.log('нет');
console.log('Циклы while и for');
console.log('Задание 1');
/*Выведите столбец чисел от 1 до 100. */
let count = 1;
while (count <= 100) {
    console.log(count);
    count++;
}
console.log('Задание 2');
/*Выведите столбец чисел от 11 до 33. */
let count_2 = 11;
while (count_2 <= 33) {
    console.log(count_2);
    count_2++;
}
console.log('Задание 3');
/*Выведите столбец четных чисел в промежутке от 0 до 100. */
let number = 100;
while (number >= 0) {
    if (number % 2 == 0) console.log(number);
    number--;
}
console.log('Задание 4');
/*С помощью цикла найдите сумму чисел от 1 до 100. */
let summa_4 = 1;
let count_4 = 1;
while (count_4 < 100) {
    summa_4 += count_4+1;
    count_4++;
}
console.log(summa_4);
console.log('Работа с for для массивов');
console.log('Задание 1');
/*Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран. */
let mas = [1, 2, 3, 4, 5];
for (let i = 0; i < mas.length; i++) {
    console.log(mas[i]);
}
console.log('Задание 2');
/*Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result. */
let result_2 = 0;
for (let i = 0; i < mas.length; i++) {
    result_2 += mas[i];
}
console.log(result_2);
console.log('Задачи общие.');
console.log('Задание 1');
/*Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10. */
let mas1 = [2, 5, 9, 15, 0, 4];
for (let i = 0; i < mas1.length; i++) if (mas1[i] > 3 && mas1[i] < 10) console.log(mas1[i]);
console.log('Задание 2');
/* Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива. */
let mas2 = [1, -5, 2, -8, 3, 4, 0, 5]
let summa_2 = 0;
for (let i = 0; i < mas2.length; i++) if (mas2[i] > 0) summa_2 += mas2[i];
console.log(summa_2);
console.log('Задание 3');
/*Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо. */
let mas3 = [1, 2, 5, 9, 4, 13, 4, 10];
for (let i = 0; i < mas3.length; i++) {
    if (mas3[i] == 4) {
        console.log('Есть!');
        break;
    }
}
console.log('Задание 4');
/*Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5. */
let mas4 = [10, 20, 30, 50, 235, 3000];
mas4.forEach(element => {
    let str = String(element);
    if (str[0] == '1' || str[0] == 2 || str[0] == 5) {
        console.log(element);
    }
});
console.log('Задание 5');
/*Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'. */
let mas5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let str_phone = '';
for (let i = 0; i < mas5.length; i++) {
    str_phone += mas5[i] + '-';
}
console.log(str_phone);
console.log('Задание 6');
/*Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num. */
let n = 1000;
let num_6 = 0;
while (n >= 50) {
    n /= 2;
    num_6++;
}
console.log('Число = ' + n + ', Кол-во итераций = ' + num_6);