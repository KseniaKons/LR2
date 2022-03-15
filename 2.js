console.log("Задание №2 \n");
        function isPalindrome(str) {
            let arr = str.split("");
            let long, equally = 0;
            //console.log(arr);
            arr.reverse(arr);
            //console.log(arr);
            long = str.length;
            for (let i = 0; i < long; i++) {
                if (arr[i] == str[i]) {
                    equally++;
                }
            }
            if (equally == long) {
                console.log("Слово '" + str + "' является полиномом? - " + true)
            }
            else {
                console.log("Слово '" + str + "' является полиномом? - " + false)
            }

        }

        let h = 'мадам', k = 'довод', g = 'ключ';
        isPalindrome(h);
        isPalindrome(k);
        isPalindrome(g);