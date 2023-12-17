/**
 * 함수 타입 정의
 * 함수란? 매개변수 => 연산을 거쳐 값을 반환하는 문법
*/

// 함수를 설명하는 가장 좋은 방법
// (JS) 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기 
// (TS) 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number) {
	return a + b; // 반환값 number 타입으로 추론
}

/**
 * 화살표 함수의 타입을 정의하는 방법
*/
const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 * 1. 선택적(?) 매개변수
 * 2. 필수적 매개변수 : 필수적으로 전달해야하는 매개변수
 * 필수적 매개변수는 선택적 매개변수 앞에 와야한다.
 * 3. rest 매개변수(...rest) : 매개변수 인수들을 순차적으로 배열에 저장
*/
function introduce(name: string, tall?: number, like?: string){
	console.log(`name: ${name}`);
	if(typeof tall === "number") { // 선택적 프로퍼티는 값이 undefined 일수도 있어서, number 연산을 하려면 number 타입으로 타입가드 하기
		console.log(`tall: ${tall + 100}`);
	}
	console.log(`like: ${like}`);
}

introduce("moon", 100, "dog");
introduce("moon", 100); // like 매개변수 - 선택적 매개변수 


// rest 매개변수
function getSum(...rest: number[]){
	console.log(rest); // [1,2,3];
	let sum = 0;
	rest.forEach((value) => sum+=value); // value 는 rest 배열의 요소
	return sum;
}

getSum(1,2,3);
getSum(1,2,3,4,5,5,6,7);

