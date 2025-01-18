function slugify(title) {
    return title.toLowerCase().split(" ").join("-");
} 


console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
// Залиш цей код для перевірки ментором.
// На що буде звертати увагу ментор при перевірці:
// Оголошена функція slugify(title)
// Виклик slugify("Arrays for beginners") повертає "arrays-for-beginners"
// Виклик slugify("English for developer") повертає "english-for-developer"
// Виклик slugify("Ten secrets of JavaScript") повертає "ten-secrets-of-javascript"
// Виклик slugify("How to become a JUNIOR developer in TWO WEEKS") повертає "how-to-become-a-junior-developer-in-two-weeks"

// console.log(words.join("-")); // 'JavaScript-is-amazing'



// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//     let totalPrice = pricePerDroid * quantity;
//     if (totalPrice > customerCredits) {
//         return "Insufficient funds!";
//     } else {
//         return `You ordered ${quantity} droids worth ${totalPrice} credits!`
//     }
// }
// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"