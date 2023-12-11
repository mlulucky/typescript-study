// 타입 호환성

/**
 * 기본 타입간의 호환성
 * 예) number 타입(슈퍼타입) <- number 리터럴 타입(서브타입) // 업캐스팅
*/

let num1: number = 10;
let num2: 10 = 10;
num1 = num2;
// num2 = num1; // 에러 (number 리터럴 타입 <- number 타입 // 다운캐스팅)


/**
 * 객체 타입간의 호환성
 * 어떤 객체 타입을 다른 객체타입으로 취급해도 괜찮은가?
 * 프로퍼티를 기준으로 슈퍼 - 서브타입 관계 // 구조적 타입 시스템
 * 슈퍼(공통 프로퍼티) - 서브(공통 + 추가 프로퍼티)
*/

type Animal = { // 공통 프로퍼티 // dog 타입이 되려면 breed 프로퍼티 필요
	name: string;
	color: string;
}

type Dog = { // name, color 프로퍼티를 가지고 있으므로 Animal 타입에도 해당된다.
	name: string;
	color: string;
	breed: string; // 추가 프로퍼티
}

let animal: Animal = {
	name: "기린",
	color: "yellow"
}

let dog: Dog = {
	name: "ruby",
	color: "brown",
	breed: "poodle"
}

animal = dog; // 슈퍼타입 변수 = 서브타입 값 // 업 캐스팅
// dog = animal; // 에러 // 다운 캐스팅

type Book = {
	name: string;
	price: number;
}

type ProgrammingBook = {
	name: string;
	price:number;
	skill: string;
}

let book: Book;
let programmingBook: ProgrammingBook = {
	name: "one-ts",
	price: 3000,
	skill: "ts"
}

book = programmingBook; // 업 캐스팅
// programmingBook = book; // 에러 // 다운 캐스팅

/**
 * 초과 프로퍼티 검사
 * 객체 변수 값 / 함수의 객체 매개변수를 리터럴로 초기화 할때, 객체의 타입검사
 * 추가적인 프로퍼티 선언시 에러발생
*/

// 객체 초기화를 리터럴 값으로 초기화시
// -> 슈퍼타입 = 서브타입 // 에러 // 초과 프로퍼티 검사
let book2: Book = {
	name: "coding",
	price: 1000,
	// skill: "react" // 에러 
}

// 리터럴 초기화 아니고, 변수를 대입하는 건 가능(슈퍼타입 = 서브타입 // 초과 프로퍼티검사 X)
let book3: Book = programmingBook;

// 함수 매개변수 인자를 리터럴로 선언시 
// 슈퍼타입 = 서브타입 // 에러 // 초과 프로퍼티 검사
function func(book: Book) {}
func({
	name: "coding",
	price: 1000,
	// skill: "react" // 에러 
})

func(programmingBook); // (초과 프로퍼티검사 X)

// 🐥 변수 객체를 초기화하거나, 함수의 매개변수를 전달할때,
// 객체 리터럴을 사용하면 초과 프로퍼티 검사 -> 초과 프로퍼티 에러발생
// 리터럴 초기화 X -> 변수대입은 가능(슈퍼타입 = 서브타입) // 초과 프로퍼티 검사 X



