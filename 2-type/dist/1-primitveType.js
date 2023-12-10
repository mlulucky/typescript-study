// 여러개의 값을 저장할 수 있는 원시타입 - number, string ..
// number 숫자 // :number 타입주석(어노테이션) - 변수의 타입정의
// 숫자값만 넣을 수 있다.
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity; // 숫자 무한대
let num6 = -Infinity; // 음의 무한대
let num7 = NaN;
// num1.toUpperCase(); // 문자열 메서드 사용불가
num1.toFixed(); // 숫자형 메서드 사용가능
// string 문자열
let str1 = "hello";
let str2 = 'hello';
let str3 = `hello`;
let str4 = `hello ${num1}`;
// boolean 참/거짓 
let bool1 = true;
let bool2 = false;
// null 타입 - null 값만 허용
let null1 = null;
// undefined
let undef1 = undefined;
// let num0: number = null; // tsconfig - strictNullChecks : false 설정
// 딱 하나의 값만 포함할 수 있는 리터럴 타입 
// 값으로 만든 타입 // 값 == 타입
// 리터럴 -> 값
// 타입으로 정의된 값 이외에 다른 값을 넣을 수 없다.
let numA = 10;
// numA = 20; // 에러
let strA = "hello";
export {};
// strA = "ts"; // 에러
// let boolA: true = false; // 에러
