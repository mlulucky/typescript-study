/**
 * Unknown 타입
 * 모든 타입의 슈퍼타입 / 전체집합
 * 모든 타입의 값을 대입할 수 있다. (타입 업캐스팅)
 * 반대로unknown 타입의 값은 어느 타입의 값에도 대입할 수 없다 (다운캐스팅)
*/

function unknownType() {
	// 업캐스팅
	let a: unknown = 1;
	let b: unknown = "hello";
	let c: unknown = true;
	let d: unknown = null;
	let e: unknown = undefined;

	let unknownVal:unknown; // unknown 타입 변수 선언
	// 에러 - 다운캐스팅
	// let num: number = unknownVal; // number 타입 변수에 대입 불가
	// let str: string = unknownVal;
	// let bool: boolean = unknownVal;
}

/**
 * Never 타입
 * 불가능
 * 반환할 수 있는 값. 타입이 없다. 공집합
 * 모든 타입의 서브타입(부분집합)
 * 모든 타입에 대입 가능하다(업캐스팅)
 * 어떤 값도 저장할 수 없는 타입(다운캐스팅)
*/

function neverType() {
	function neverFunc(): never {
		while(true) {}
	}

	let num: number = neverFunc();
	let str: string = neverFunc();
	let bool: boolean = neverFunc();
	
	// 에러 - 다운캐스팅
	// let never1: never = 10;
	// let never2: never = "string";
	// let never3: never = true;
}
 

/**
 * Void 타입
 * 반환값이 없는 함수
 * undefined 의 슈퍼타입 -> void 타입에 undefined 값 대입가능
*/

function voidType() {
	function voidFunc():void {
		return undefined;
	}

	let voidVal:void = undefined;
}

/**
 * Any 타입
 * any 타입은 치트키
 * 모든 타입의 슈퍼타입 | 서브타입 으로 사용 가능 (never 제외)
 * 타입 계층도 무시 (never 제외)
*/

function anyType() {
	let unknownVal: unknown;
	let anyVal: any;
	let undefinedVal: undefined;
	let neverVal: never;

	unknownVal = anyVal;
	anyVal = unknownVal; // any 타입에 unknown 타입 대입가능
	undefinedVal = anyVal; // undefined 타입에 any 타입 대입 가능
	// neverVal = anyVal; // 에러 - never 타입은 제외
}



