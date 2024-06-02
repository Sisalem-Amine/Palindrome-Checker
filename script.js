const submitButton = document.getElementById("check-btn");

const reverseString = (string) => {
    const reversedString = string.split("").reverse().join("");
    return reversedString;
};

function checkIfPalindrome(){
    const originalString = document.getElementById("text-input").value;
    const whtaToRemove = /[^a-zA-Z0-9]/g;
    const compareString = document.getElementById("text-input").value.replace(whtaToRemove, "").toLocaleLowerCase();
    const reversedString = reverseString(compareString);
    const result = document.getElementById("result");

    if(compareString !== ""){
        if(compareString === reversedString){
            result.style.display = "block";
            result.innerHTML = `<p><span class="bold">${originalString}</span> is a palindrome</p>`;
        }else{
            result.style.display = "block";
            result.innerHTML = `<p><span class="bold">${originalString}</span> is not a palindrome</p>`;
        }
    }else{
        alert("Please input a value");
        result.style.display = "block";
        result.innerHTML = `<p class="bold">Please input a value</p>`;
    }
}

submitButton.addEventListener("click", checkIfPalindrome);

