/**
 * 인터페이스 선언 합침
 * 인터페이스는 타입별칭과는 달리
 * 동일한 이름으로 인터페이스를 선언가능
 * 왜? 동일한 이름으로 선언된 인터페이스는 합쳐진다
 * => 선언 합침
 * 단, 동일한 프로퍼티(속성)을 다른 타입으로 정의하는 경우는 충돌발생. 
*/

interface Person {
	name: string;
}

interface Person {
	// name: "luna"; // 에러 // 동일한 프로퍼티(속성)을 다른 타입으로 정의하는 경우는 충돌발생
	// name: string; // ok
	age: number;
}

// 확장시에는 타입이 슈퍼-서브 타입이면된다.
interface newPerson extends Person {
	name: "luna";
}

const person: Person = {
	name: "luna",
	age: 3
}

/**
 * 선언합침 사용예시
 * => 모듈 보강
 * 기존에 사용중이던 라이브러리에 타입정의에 프로퍼티를 추가하고 싶을때
*/

// 기존 라이브러리에 정의된 인터페이스 타입
interface Lib {
	a: number;
	b: number;
}

// 내가 추가하는 타입
interface Lib {
	c: number; // 모듈의 타입을 보강
}

const lib: Lib = {
	a: 1,
	b: 2,
	c: 3
}
