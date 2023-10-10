function firstLetterName(name) {
    alert("The name " + name + " starts with the letter " + name[0]);
}

function divisibleByTwo(number) {
    if (number % 2 == 0) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

function largestNum(arr) {
    let bigNumber = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > bigNumber) {
            bigNumber = arr[i];
        }
    }
    console.log(bigNumber);
}

firstLetterName("Ellisse");
divisibleByTwo(10);
largestNum([1, 2, 3, 4, 50]);