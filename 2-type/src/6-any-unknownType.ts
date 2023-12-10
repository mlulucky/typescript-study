// 🐥any
// 특정 변수의 타입을 확실히 모를때
// 타입검사 통과(타입검사 X) -> 타입 오류시 런타임 에러 (일반적인 자바스크립트와 동일)

let a = 10; // 변수 초기화 -> 타입추론
// a = "hi"; // 에러

// 모든 타입 사용 가능
let b: any = 10;
b = "hello";
b = {};
b = () => {};

// 모든 타입의 메서드 사용 가능
b.toUpperCase();
b.toFixed();

// 모든 타입의 변수에 any 타입 값을 대입할 수 있다.
let num: number = 10;
num = b;

// 🐥unknown
// 모든 타입의 값을 할당 가능 (any 와 동일)
let unknownType: unknown;
unknownType = "";
unknownType = 1;
unknownType = () => {};

// 👀 1. any 타입과는 다르게 다른 타입의 변수에 unknown 타입 할당불가
// num = unknownType; // 에러

// 👀 2. any 타입과는 다르게 아무 타입의 메서드 사용 불가
// unknownType.toUpperCase(); // 에러

// unknown 타입의 값을 number 타입 변수에 할당하는 방법
// unknown 타입이 number 타입인 경우를 지정하여 할당가능 ->typeof 사용
if (typeof unknownType === "number") { // 타입정제, 타입 좁히기
  num = unknownType;
}


