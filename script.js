function generateNumbers() {
    let lottoNumbers = [];
    for (let i = 0; i < 5; i++) {
        let numbers = Array.from({length: 45}, (v, i) => i+1);
        let rowNumbers = [];
        for (let j = 0; j < 6; j++) {
            let randomIndex = Math.floor(Math.random() * numbers.length);
            rowNumbers.push(numbers[randomIndex]);
            numbers.splice(randomIndex, 1);
        }
        rowNumbers.sort(function(a, b){return a-b});
        lottoNumbers.push(rowNumbers);
    }

    let numbersStr = "";
    for (let i = 0; i < 5; i++) {
        numbersStr += lottoNumbers[i].join(", ");
        if (i < 4) {
            numbersStr += "\n";
        }
    }
    document.getElementById("lotto-numbers").innerHTML = numbersStr;
}
