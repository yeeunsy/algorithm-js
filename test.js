function rotatedWords(word) {
    let rotations = [];

    for (let i = 0; i < word.length; i++) {
        let rotatedWord = word.slice(i) + word.slice(0, i);
        rotations.push(rotatedWord);
    }

    return rotations;
}

let word = "abc";
let result = rotatedWords(word);
console.log(result);