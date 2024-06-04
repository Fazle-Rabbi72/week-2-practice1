

const monthlySavings = (array, num) => {
    if (!Array.isArray(array) || typeof num !== 'number') {
        console.log("Invalid input");
        return;
    }

    let totalPayment = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element >= 3000) {
            let tax = element - element * 0.2;
            totalPayment += tax;
        } else {
            totalPayment += element;
        }
    }
    
    return totalPayment - num;
}

let number = 10000;
let array = [900, 2700, 3400];
const saving = monthlySavings(array, number);
if (saving < 0) {
    console.log("earn more");
} else {
    console.log(saving);
}

    

