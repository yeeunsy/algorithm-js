// 1. 최대 공약수 구하기
let resGcd = ( num1, num2 ) => {

    let gcd;
    
    for (let i = 2; i <= Math.min( num1, num2 ); i++) {    //매개변수로 들어온 가장 작은 수 만큼 반복
        if (num1 % i === 0 && num2 % i === 0){        // 두 수를 동시에 나눌 수 있는 수 중 나머지가 0인 숫자만 반환
            gcd = i;
        }
    }

    return gcd;
}
// 유클리드 호제법 : 최대공약수를 구할 때 쓰는 함수

console.log("최대 공약수 : ", resGcd(12, 18));


// 2. 배열의 짝수와 홀수의 개수 세기
function evenOdd(num_list) {
    return [
      num_list.filter((num) => num % 2 === 0).length, //배열 값 중 필터링 조건에 맞게 홀수 return
      num_list.filter((num) => num % 2 === 1).length,
    ];
  }

console.log("짝수 홀수 개수 : ", evenOdd([1,2,3,4,5,6]));


// 3. 문자열 역순 배치 후 오른쪽으로 이동
function reverse(str_list) {
    let str = str_list.split('').reverse().join(''); // 문자배열로 변환 후 역순으로 배치 후 문자열로 결합
    
    let resStr = "";  // 아스키코드로 1씩 증가시킨 문자를 담기 위한 변수 선언

    for (let i = 0; i < str.length; i++) {
        let char = str[i]; // 해당 순서의 문자 할당
        let charCode = char.charCodeAt(0); // 할당된 문자의 아스키코드 할당
        
        if (char >= 'a' && char <= 'z') { // 소문자 구분 
            //소문자 = (charCode - 97 + 1) % 26 + 97은 z에서 a로 줄 바꿈하여 이동된 문자 계산
            resStr += String.fromCharCode((charCode - 97 + 1) % 26 + 97);  // 
        } else {
            // 알파벳이 아닌 문자는 변경 되지 않음
            resStr += char;
        }
    }
    
    return resStr;
}

// 최적화 해보기

console.log("hello : ", reverse("hello")); 


// 4. 배열에서 가장 큰 값 구하기
function findMax (num_list) {
    const max = Math.max(...num_list);

    return max;
}

console.log(findMax([1, 2, 1, 3, 2, 1, 4, 1]));


// 5. 
function getMaxNumber(number, k) {
    function helper(current, start, k) {
        if (k === 0) return current + number.slice(start);
        if (start === number.length) return current;

        let maxDigit = '0';
        let maxIndex = start;

        for (let i = start; i <= start + k; i++) {
            if (number[i] > maxDigit) {
                maxDigit = number[i];
                maxIndex = i;
            }
        }

        return helper(current + maxDigit, maxIndex + 1, k - (maxIndex - start));
    }

    return helper('', 0, k);
}

let maxNumber = getMaxNumber("1924", 2);

console.log(maxNumber);

