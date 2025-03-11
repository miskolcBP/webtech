function numberGuessingGame() {
const targetNumber = Math.floor(Math.random() * 1000001); // Véletlenszám generálása [0, 1000000]
const maxAttempts = 20;
let attempt = 0;

alert("Találd ki a számot 0 és 1 000 000 között. Legfeljebb 20 tipped lehet.");

while (attempt < maxAttempts) {
    let userInput = prompt(`Add meg a(z) ${attempt + 1}. tipped: `);
    let guess = parseInt(userInput, 10);

    if (isNaN(guess)) {
        alert("Érvénytelen bemenet! Kérlek, adj meg egy számot.");
        continue;
    }

    attempt++;

    if (guess === targetNumber) {
        alert(`Gratulálok, ${attempt} lépésből eltaláltad!`);
        return;
    } else if (guess > targetNumber) {
        alert(`${attempt}. tipp nem talált: A megoldás kisebb.`);
    } else {
        alert(`${attempt}. tipp nem talált: A megoldás nagyobb.`);
    }
}

alert(`Sajnos ez most nem sikerült! A keresett szám ${targetNumber} volt.`);
};
