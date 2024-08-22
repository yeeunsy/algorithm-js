
// --- 1. 중복된 문자는 제거, 남은 문자는 순서대로 반환
function removeWord(s) {
    let seen = new Set();
    let result = '';

    for ( let char of s ) {
        if ( !seen.has(char) ) {
            seen.add(char);
            result += char;
        }
    }

    return result;
}

console.log(removeWord("abcabc"));
console.log(removeWord("hello"));    
console.log(removeWord("aabbccdde"));




// --- 2. 주어진 배열에서 최솟값, 최대값을 배열로 반환
function find(arr) {
    let min = arr[0];
    let max = arr[0];

    for ( let i = 0; i < arr.length; i++ ) {
        // 최솟값 찾기
        if ( arr[i] < min ) {
            min = arr[i];
        }
        
        // 최대값 찾기
        if ( arr[i] > max ) { 
            max = arr[i];
        }
    }

    return [min, max];
}

console.log(find([3, 1, 4, 1, 5, 9]));   
console.log(find([-10, -20, 0, 10, 5])); 




// --- 3. 문자열 요약 해주기
function summation(str) {
    let result = '';
    let char = str[0];
    let count = 0;

    for ( let i = 0; i < str.length; i++ ) {
        if ( str[i] === char ) {
            count++;
        } else {
            result += `${char}${count} / `;
            char = str[i];
            count = 1;
        }
    }

    return result += `${char}${count}`;
}

console.log(summation('aaabbbc'));
console.log(summation('ahhhhz'));




// --- 4. 배열에서 두 수를 선택하여 그 합이 주어진 target 값과 일치하는지 확인 ( 일치 : true / 불일치 : false )
function between(arr, target) {
    const seen = new Set();

    for ( let i = 0; i < arr.length; i++ ) {
        const number = arr[i];
        const res = target - number;

        if (seen.has(res)) {
            return true;
        }

        seen.add(number);
    }

    // 합이 맞는 두 수가 없을 경우
    return false;
}

console.log(between([2, 7, 11, 15], 9));




// --- 5. 문자열이 유효한 괄호인지 확인
function check(s) {
    
    if (s.length < 1 || s.length > 1000) {
        return false;
    }
    
    const stack = [];

    // 일치하는 쌍
    const match = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of s) {
        //
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (stack.length === 0 || stack.pop() !== match[char]) {
            return false;
        }

    }

    return stack.length === 0;
}

console.log(check("({[]})"));
console.log(check("({][})"));

