/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 👀 기준1. 반환값이 호환되는가
type A = () => number; // 함수 반환타입 number
type B = () => 10; // 함수 반환타입 number 리터럴타입 10

let a: A = () => 10; // 10을 반환하는 A 타입 함수
let b: B = () => 10; // 10을 반환하는 B 타입 함수

a = b; // A 타입(number)를 B 타입(리터럴 10)으로 취급 - 업캐스팅(타입호환 O)
// b = a; // B 타입(리터럴 10)을 A 타입(number)으로 취급 - 다운캐스팅(타입호환 X) // 에러

// 👀 기준2. 매개변수가 호환되는가 ?
// 🐥 2-1. 매개변수 타입이 슈퍼 - 서브타입 관계, 매개변수 개수가 같을때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 매개변수 number 타입 <- 리터럴 10타입 - 업캐스팅(타입호환 X) 에러
d = c; // 매개변수 리터럴10 타입 <- number 타입 - 다운캐스팅(타입호환 O)

// 매개변수의 타입은 업캐스팅일때 타입호환 X(에러) / 다운캐스팅일때 타입호환 O
// 예) 매개변수가 객체타입인 경우

type Animal = {
	name: string;
};

type Dog = {
	name: string;
	color: string;
};

let animalFunc = (animal: Animal) => { // animal은 Animal 타입의 객체
	console.log(animal.name);
}

let dogFunc = (dog: Dog) => { // dog 는 Dog 타입의 객체
	console.log(dog.name);
	console.log(dog.color);
}

// animalFunc = dogFunc; // 업캐스팅 - 에러
// animalFunc 함수에 dogFunc 함수 대입
// animalFunc 함수의 매개변수 Animal 타입을 따른다.
// dogFunc 함수의 본문(연산)을 따른다.
// 예)
let test = (animal: Animal) => {
	console.log(animal.name);
	// console.log(animal.color); // 에러 // Animal 타입에는 color 프로퍼티가 없다.
}

dogFunc = animalFunc; // 다운캐스팅 - 호환o
// dogFunc 함수의 매개변수 Dog 타입을 따른다.
// animalFunc 함수의 본문(연산)을 따른다.
// 예)
let test2 = (dog: Dog) => {
	console.log(dog.name); // animalFunc 함수의 본문
}

// 🐥 2-2. 매개변수의 타입이 같고, 매개변수 개수가 다를때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a,b)=> {}
let func2: Func2 = (a) => {}

func1 = func2; 
// func1 함수 <- func2 함수 할당
// Func2 타입을 Func1 타입으로 취급하겠다(Func1 <- Func2)
// 매개변수 2개 <- 매개변수 1개 (ok)

// func2 = func1; // 에러
// func2 함수 <- func1 함수 할당
// Func1 타입을 Func2 타입으로 취급하겠다(Func2 <- Func1) 
// 매개변수1개 <- 매개변수2개 (에러)
