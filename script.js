

function increaseApple() {
    document.querySelector("#apple").value++;
    document.querySelector("span").innerHTML  = Number(document.querySelector("#apple").value * 10) + Number(document.querySelector("#orange").value * 15) + Number(document.querySelector("#banana").value * 7)
    if (document.querySelector("span").innerHTML  > (document.querySelector(".my-amount").value)) {
        alert("Sorry, you don't have enough money.");
    }

}
function decreaseApple() {
    document.querySelector("apple").value--;
    document.querySelector("span").innerHTML = Number(document.querySelector("#apple").value * 10) + Number(document.querySelector("#orange").value * 15) + Number(document.querySelector("#banana").value * 7)
}


function increaseOrange(){
    document.querySelector("#orange").value++;
    document.querySelector("span").innerHTML = Number(document.querySelector("#apple").value * 10) + Number(document.querySelector("#orange").value * 15) + Number(document.querySelector("#banana").value * 7)
    if (document.querySelector("span").innerHTML > (document.querySelector(".my-amount").value)) {
        alert("Sorry, you don't have enough money.");
    }
}
function decreaseOrange() {
    document.querySelector("orange").value--;
    document.querySelector("span").innerHTML = Number(document.querySelector("#apple").value * 10) + Number(document.querySelector("#orange").value * 15) + Number(document.querySelector("#banana").value * 7)


}

function increaseBanana(){
    document.querySelector("#banana").value++;
    document.querySelector("span").innerHTML = Number(document.querySelector("#apple").value * 10) + Number(document.querySelector("#orange").value * 15) + Number(document.querySelector("#banana").value * 7)
    if (document.querySelector("span").innerHTML > (document.querySelector(".my-amount").value)) {
        alert("Sorry, you don't have enough money.");
    }
}
function decreaseBanana(){
    document.querySelector("#banana").value--;
    document.querySelector("span").innerHTML = Number(document.querySelector("#apple").value * 10) + Number(document.querySelector("#orange").value * 15) + Number(document.querySelector("#banana").value * 7)


}

