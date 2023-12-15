/**
 * 타입추론
 * 변수의 초기값 을 기준으로 변수타입을 추론
 * 타입을 일일이 정의하지 않아도 됨 // 함수의 매개변수는 제외
*/

// 🐥 let 변수 선언 -> 범용적인 기본 타입 추론(타입 넓히기)
let a = 10; // number 타입으로 추론
let b = "string";

// 객체, 배열의 구조분해 할당의 경우에도 타입추론 가능
let c = {
	id: 1, // number
	name: "lucky", // string
	profile: {
		nickname: "moon" // string
	}
};

// 객체 구조분해 할당
let {id, name, profile} = c; 

// 배열 구조분해 할당
let [one, two, three] = [1, "hello", true];

// 🐥 함수 타입 - return문의 반환값으로 반환타입을 추론
function func() {
	return "hello"; // 반환타입 string
}

// 🐥 변수의 초기값 생략(셋팅x) -> any 타입 추론 -> 암묵적 any 타입
let d; // any 타입 // 모든 값을 넣을 수 있다.
d = 10; // number 값 할당
d.toFixed(); // any 타입 -> number 타입으로 추론

// d.toLocaleUpperCase(); // 문자타입 메서드 사용불가

d = "hello"; // 다시 문자열 값 할당가능
d.toLocaleUpperCase(); // any 타입 -> string 타입으로 추론

// 타입이 계속 변한다.
// any 타입의 진화
// 암묵적 any 타입 -> any 타입 변화
// 명시적 any 타입 지정과는 다르다. any 타입 지정시에는 그 뒤로 계속 any 타입

// 🐥 const 변수 값 선언 -> 리터럴 타입 추론
// 초기값을 기준으로 리터럴 타입이 된다.
const num = 10; // 값이 변할 수 없으므로. 타입이 10 이 된다.
const str = "hello"; // 타입이 리터럴 "hello" 가 된다.


// 배열 타입추론 -> 배열 요소의 union 합집합 타입 추론 
// (number | string)[]
let arr = [1, "string"];

// 🐥 const 변수 배열 선언 -> 배열 요소 타입을 기반으로 타입추론
const cc = [1,2]; // number[]

// 타입단언 as const
// 튜플타입. 값변경 불가, 리터럴타입
const e = [1,2,3] as const;