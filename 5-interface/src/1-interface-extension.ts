/**
 * 인터페이스 확장(상속)
 * 프로퍼티 중복(공통 프로퍼티) 사용 시
 * => extends 를 이용해 다른인터페이스의 프로퍼티를 포함시키는 문법
 * => 프로퍼티를 물려받는 것  
*/

// type Animal = { // type 별칭이어도 확장(extends)가능
// 	name: string;
// 	color: string;
// }

interface Animal { 
	name: string;
	color: string;	
}

interface Dog extends Animal { // 인터페이스 Dog 는 인터페이스 Animal 을 확장(추가)하는 타입
	// name: "ruby"; // 상속받은 프로퍼티 재정의 가능 // 재정의시 상속받은 원본 프로퍼티 타입의 서브타입이어야함
	isBark: boolean;
}

/**
 * 인터페이스 다중 확장
 * 두개 이상의 객체 타입을 확장(상속) 할 수 있다.
 * 
*/

interface DogCat extends Dog, Cat {
}

const dogCat: DogCat = {
	name: "lucky",
	color: "brown",
	isBark: true,
	isScratch: true
}


interface Cat extends Animal {
	isScratch: boolean;
}

interface Bird extends Animal {
	isFly: boolean;
}

const dog: Dog = {
	name: "ruby",
	color: "",
	isBark: true
}