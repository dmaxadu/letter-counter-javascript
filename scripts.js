let popup = document.querySelector(".answer-container");
let tellMe = document.querySelector(".count-button");
let closeButton = document.querySelector(".close-button");

const popUp = () => {
    let userPhrase = document.querySelector("#user-string").value;
    let result = document.querySelector(".result");
    let showPhrase = document.querySelector(".the-phrase")
    popup.style.display = "flex";
    count = countLetter(userPhrase);
    showPhrase.innerText = "The phrase " + "\"" + userPhrase + "\"" + " has:"
    result.innerText = count + " Letters";
    
}

const closeDiv = () => {
    popUp.style.display = "none"
}

const countLetter = (string) => {
    letters = string.length - string.split(' ').length + 1;
    return(letters)
}

tellMe.addEventListener("click", popUp);
closeButton.addEventListener("click", closeDiv);