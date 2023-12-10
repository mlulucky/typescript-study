// void 타입
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음

function func1(): string { // 함수의 반환값 - 타입지정 - 문자열타입을 반환
	return "hello";
}

function func2():void { // 함수 반환(return)값 없음 - void 타입
	console.log("hi");
}

// 함수의 반환값이 없는 경우 undefined, null 타입을 사용하지 않는 이유
// undefined 타입 -> undefined 를 return 해야한다.
// return undefined; | return;

// null 타입 -> null 을 return 해야한다.
// return null;


// void 타입 변수 - 값을 대입할 수 없다. -> undefined 값은 대입가능
let a: void;
// a=10; // 에러
// a= "hello"; // 에러
// a= {}; // 에러
a = undefined; // undefined 값이 없음


// never 타입
// never -> 존재하지 않는
// 불가능한 타입

// 함수의 반환값이 존재할 수 없는 타입
function func3():never {
	while(true) {} // 반복문이 끝나지 않음 -> 무한반복 
}

function func4():never {
	throw new Error(); // 에러를 발생시키고 함수 종료
}

// never 타입 변수
// 어떤 값도 저장할 수 없다.
let c:any ;
let b: never; 
// b = 10; // 에러
// b = "hello"; // 에러
// b= undefined; // 에러
// b = null; // 에러
// b = c; // any 타입의 값도 대입할 수 없다.