let firtsNumber = "100";
let secondNumber = "50";

function PalindromeChecker(number) {
    let reverseNumber = number.split("").reverse();
    if (number == reverseNumber.join("")) {
        return true;
    }
    else {
        return false;
    }
}