console.log("Задание №5 \n");

const back = document.getElementById("back");
const forward = document.getElementById("forward");

let kol = 0;
let action;
let ImgId = document.querySelectorAll(".Img");

back.addEventListener("click", () => { action = -1; chekk();})
forward.addEventListener("click", () => { action = 1; chekk(); })

function chekk() {
    ImgId[kol].style.display = 'none';
            if (action == -1 && kol == 0) {
                kol = 2;
                ImgId[kol].style.display = 'block';
            }
            else if (action == true && kol == 2) {
                kol = 0;
                ImgId[kol].style.display = 'block';
            }
            else {
                ImgId[kol + action].style.display = 'block';
                kol += action;
            }
}

