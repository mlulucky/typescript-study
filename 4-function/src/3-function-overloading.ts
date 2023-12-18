/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라
 * 여러가지 버전으로 만드는 문법
*/
// 하나의 함수 func 기능정의
// 모든 매개변수 타입은 number
// ver1. 매개변수가 1개 -> 매개변수에 20을 곱한값 출력
// ver2. 매개변수가 3개 -> 매개변수를 다 더한 값을 출력

// 오버로드 시그니처
// 함수의 구현부 없이 선언식만
// 함수의 버전을 명시
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 구현 시그니처
// 실제 구현부 - 실제 동작
function func(a: number, b?: number, c?: number) {
	// 선택적 프로퍼티 - 없을 수 도 있으므로 -> 타입체크 하기
	if(typeof b === "number" && typeof c === "number") {
		console.log(a+b+c);
	}
	else {
		console.log(a * 20);
	}
}

// 함수 호출시 - 오버로드 시그니처. 함수버전을 따른다.
// function func() {} // 실제 구현부 예)
// func(); // 에러
func(1);
// func(1,2); // 에러
func(1,2,3);