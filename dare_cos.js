// 강창민 튜터님 풀이

// 주어진 배열 짝수 홀수 개수
function solution(arr) {
    // arr에서 홀수 개수를 구할 수 있다면 (전체 길이 - 홀수 개수 = 짝수)
    // arr에서 짝수 개수를 구할 수 있다면 (전체 길이 - 짝수 개수 = 홀수)
    let evenCount = 0;
    for ( let i = 0; i < arr.length; i += 1) {
        // arr 배열의 원소를 순회하면서 짝수인지 파악하면 된다.
        if ( arr[i] % 2 === 0) {
            evenCount++;
        }
    }

    return [arr.length - evenCount, evenCount];
}

console.log(solution([1,2,3,4,5,6]));


// 주어진 문자열 역순 배치 후 오른쪽 이동
function solution2 (str) {
    const reversedStr = str.split('').reverse(); //
    let result = "";

    for (let i = 0; i < reversedStr.length; i += 1) {
        const ch = reversedStr[i];
        if ( ch === "z" ) {
            result += "a";
        } else {
            result += String.fromCharCode(ch.charCodeAt(0) + 1); // a -> b ... y -> z
        }
    }

    return result;

}

console.log(solution2("hello"));


// arr = [2, 7, 11, 15], target = 13 출력 true
function solution3 (arr, target) {
    const s = new Set();

    for ( let i = 0; i < arr.length; i += 1 ) {
        const num = arr[i];
        if ( s.has( target - num ) ) {
            return true;
        }
        s.add(num);
    }

    return false;

}

console.log(solution3([2, 7, 11, 15], 9));


// 주어진 문자열이 유효한 괄호 조합인지 확인
function solution4(str) {
    const stack = [];
    const match = new Map();
    match.set(')', '(');
    match.set('}', '{');
    match.set(']', '[');

    for (let i = 0; i < str.length; i += 1) {
        const ch = str[i];
        const open = Array.from(match.values());

        if ( open.includes(ch)) {
            stack.push(ch);
        } else if ( stack.length > 0 && stack[stack.length-1] === match.get(ch)) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
}

console.log(solution4("({[]})"));
console.log(solution4("({][})"));
console.log(solution4("({}[])"));


