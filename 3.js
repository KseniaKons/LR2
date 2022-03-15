console.log("Задание №3 \n");
//let add = [[1,2],[3,4,5]];
//long = add.length;
//console.log(add);
//console.log(long);
//long = add[1].length;
//console.log(long)
//console.log(add[1][0])
function matrixAddition(arr1, arr2) {
    let size1 = arr1.length; //строки
    let size2 = arr2.length; //строки

    let long1 = arr1[0].length; //стобцы
    let long2 = arr2[0].length; //столбцы

    let sumArr = "";
    let r = 0;

    console.log(arr1);
    console.log(arr2);


    if (size1 == size2 && long1 == long2) {
        for (let i = 0; i < long1; i++) {
            for (let j = 0; j < size1; j++) {
                r = arr1[i][j] + arr2[i][j];
                sumArr += r + "\t";
            }
            sumArr += "\n";
        }

        console.log("Cумма двух массивов = " + "\n" + sumArr)
    }
    else {
        console.log("Операция невыполнима")
    }

}

let array1 = [[1, 2], [3, 4]];
let array2 = [[9, 8], [7, 6]];
let array3 = [[1, 2]];

matrixAddition(array1, array2);
matrixAddition(array1, array3);
