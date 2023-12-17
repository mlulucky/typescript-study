/**
 * 👀 함수 타입정의방법
 * 함수타입 표현식, 호출 시그니처
 * 중복 타입정의를 제거할 수 있다. (재사용)
*/

/**
 * 🐥 1. 함수 타입 표현식
 * => 타입별칭으로 함수 타입 정의
*/

// type 타입변수명 = (매개변수 타입) => 함수 반환값 타입
type Operation = (a: number, b: number) => number; 

// 함수타입 표현1 : 함수에 타입 직접 정의 
const add1 = (a: number, b: number): number => a + b;

// 함수타입 표현2 : 함수 타입별칭 사용(함수타입 표현식)
const add2: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;


/**
 * 🐥 2. 호출 시그니처
 * (콜 시그니처)
 * type 별칭으로 객체를 정의 + 프로퍼티로 함수의 매개변수, 반환값을 타입으로 정의 
*/

type Operation2 = { // 객체 정의 (가능한 이유? 함수도 객체다)
	(a: number, b: number): number;// 매개변수 타입 / 함수 반환값 타입
	// => 일반적인 함수 타입정의 (a: number): void 형식을 가져와 정의하는 문법
}

// 일반적인 함수 타입정의
function func(a: number): void {}

const sub2: Operation2 = (a, b) => a - b;