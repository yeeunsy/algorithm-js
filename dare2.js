

// --- 1. 중복된 문자는 제거, 남은 문자는 순서대로 반환
function removeDuplicates(s) {
    let seen = new Set();
    let result = '';

    for (let char of s) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }

    return result;
}

console.log(removeDuplicates("abcabc"));
console.log(removeDuplicates("hello"));    
console.log(removeDuplicates("aabbccdde"));




// --- 2. 주어진 배열에서 최솟값, 최대값을 배열로 반환
function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        // 배열의 최솟값 찾기
        if (arr[i] < min) {
            min = arr[i];

        }
        
        // 최대값 찾기
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return [min, max];
}

console.log(findMinMax([3, 1, 4, 1, 5, 9]));   
console.log(findMinMax([-10, -20, 0, 10, 5])); 




// --- 3. 문자열 요약 해주기
function summarizeString(str) {
    let result = '';
    let currentChar = str[0];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === currentChar) {
            count++;
        } else {
            result += `${currentChar}${count} / `;
            currentChar = str[i];
            count = 1;
        }
    }

    return result += `${currentChar}${count}`;
}

console.log(summarizeString('aaabbbc'));
console.log(summarizeString('ahhhhz'));




// --- 4. 배열에서 두 수를 선택하여 그 합이 주어진 target 값과 일치하는지 확인 ( 일치 : true / 불일치 : false )
function hasPairWithSum(arr, target) {
    const seenNumbers = new Set();

    for (let i = 0; i < arr.length; i++) {
        const currentNumber = arr[i];
        const complement = target - currentNumber;

        // Check if the complement of the current number exists in the set
        if (seenNumbers.has(complement)) {
            return true;
        }

        // Add the current number to the set
        seenNumbers.add(currentNumber);
    }

    // If no pair is found that sums to the target, return false
    return false;
}

const target = 9;
console.log(hasPairWithSum([2, 7, 11, 15], target)); // Output: true