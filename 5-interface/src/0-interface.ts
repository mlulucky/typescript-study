/**
 * 인터페이스
 * 1. 기능 - 타입정의
 * 타입 별칭과 같이 타입을 정의하는 기본적인 기능은 같다.
 * 차이점) 🔥객체의 타입을 정의하는데 특화 / 객체의 메서드 오버로딩 정의가능
 * => 인터페이스에서는 유니온(합집합), 인터섹션(교집합) 타입을 만들 수 없다.
 * => 1) 타입별칭 또는 타입주석에서 type 에서 유니온, 인터섹션 타입으로 만들기
 */

interface Person {
  readonly name: string;
  age?: number;
  // 🐥 메서드 타입정의 방식
  // 1. 함수타입 표현식
  // sayHi: () => void;
  // sayHi: () => void; // 에러 - 함수타입표현식은 함수명 중복불가

  // 2. 메서드명이 붙는 호출 시그니처(메서드 시그니처)
	// 인터페이스는 sayHi 라는 이름의 메서드를 가진 객체의 타입을 정의한다.
  // 👀 호출시그니처 - 함수명 중복가능. 함수 오버로딩
  // 같은 이름의 함수가 다른 매개변수 및 반환타입을 가질 수 있다.
  sayHi(): void;
  sayHi(a: string, b: string): void;

  // 일반 호출시그니처 X
  // (): void; => 메서드명이 안붙는 경우, 함수타입이 되어버려서(?) // 인터페이스는 객체의 구조를 정의하는것이므로!
	// 시그니처란? 함수나 메서드가 어떤 인자를 받고, 어떤 값을 반환하는지에 대한 정보
	// => 컴파일러가 올바른 함수, 메서드를 호출할 수 있다.

} // & number // | number // 에러

type Union = number | string | Person;
type Inter = number & string & Person;

const person: Person = {
  // Person : 타입주석
  name: "ruby",
  age: 15,

  // 메서드 (함수 프로퍼티)
  // 객체의 프로퍼티 이름은 중복불가
  // 인터페이스에서 정의한 함수 오버로딩
  // 함수 구현부에서는 하나의 함수에서 경우 처리하기
  // sayHi: function() { // 에러 // 함수명 중복불가
  // 	console.log("hello");
  // },
  sayHi: function (a?: string, b?: string) {
    if (a && b) {
      console.log(`${a}, ${b}`);
    } else {
      console.log("hello");
    }
  },
};

// 메서드 sayHi를 여러가지 버전으로 만들고 싶을때
// 인터페이스에서 호출시그니처로 정의하기! // 함수타입표현식인 경우 함수명 중복불가

person.sayHi();
person.sayHi("hello", "lucky");
