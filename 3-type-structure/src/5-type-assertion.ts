/**
 * 타입 단언(type assertion)
 * 나는 타입이 맞다고 확신한다 라고 컴파일러에게 전달하는 것
 * 실제 타입을 바꾸는 것은 아님
 * 타입스크립트 컴파일러의 눈을 가리는, 믿도록 만드는것
 * 실제 타입이 존재하지 않아도 코드 실행전, 컴파일단계에서는 에러가 안나게 만들 수 있음 => 런타임 환경에서 에러발생
 * => 결국 타입스크립트를 사용하는 가장 큰 장점(타입 안전성)을 없애는 것
 * => 해당 타입이 맞는 경우, 확실할 때에 사용하기
*/

type Person = {
	name: string;
	like: string;
}

// let person:Person = {}; // 빈객체 -> Person 타입X // 에러

// 🐥 타입 단언이 필요한 상황
// 1. 빈 객체에 타입을 선언
let person= {} as Person; // 타입 단언 // {} 빈객체 값을 Person 타입으로 단언
person.name = "moon";
person.like = "dog";

// 2. 객체에 타입이 존재하지 않아도, 타입으로 선언 가능하다.
type Dog = {
	name: string;
	color: string;
}

let dog: Dog = {
	name: "루비",
	color: "beige",
	// breed: "poodle" // Dog 에 없는 타입인 breed 라는 속성이 추가되어서 에러발생
} 
let dog2 = {
	name: "루비",
	color: "beige",
	breed: "poodle"
} as Dog; // Dog 타입이라고 단언을 하면, Dog 타입에 맞지 않더라도 에러 발생X 
// Dog 타입이 맞다고 컴파일러에게 확신을 주는 것. => 하지만 이 경우에는 런타임환경에서 에러발생된다.


/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A 가 B의 슈퍼타입 또는 A가 B의 서브타입 이어야함.
*/

let num1 = 10 as never; // 10은 never 의 슈퍼타입
let num2 = 10 as unknown // 10은 unknown 의 서브타입

// 다중 단언
// number 타입을 바로 string 타입으로 단언 할 수 없을때, unknown을 사용하여 다중단언
let num3 = 10 as unknown as string;


/**
 * const 단언
 * 변수를 const 로 선언한것과 같은 동일한 효과
 * 객체의 경우 프로퍼티(속성)이 readonly 가 읽기전용으로 된다. => 프로퍼티의 값을 수정할 수 없게됨
*/

let num04 = 10; // 타입 number 로 추론
let num4 = 10 as const; // 타입이 리터럴타입 10 으로 추론 // const num4 = 10;

// 객체의 경우 const 단언시
// 모든 프로퍼티를 readonly 로 만들 수 있다.

let cat = {
	name: "나비",
	color: "yellow"
} // {name: string, color: string} 타입 추론

let cat2 = {
	name: "나비",
	color: "yellow"
} as const;
// {readonly name: "나비", readonly color: "yellow"} 타입 추론

// cat2.name = ''; // readonly 타입 -> 프로퍼티 수정 불가


/**
 * Non Null 단언
 * null, undefined 가 아니라고 타입스크립트 컴파일러에게 전달
*/

// ! 느낌표 연산자 - 있어!

type Post = {
	title: string;
	author?:string;
}

let post: Post = {
	title: "board"
}

// undefined 는 number 타입에 할당불가 -> 에러
// const length0 : number = post.author?.length;  // 옵셔널체이닝
// post.author 가 있으면? post.author.length 반환, 없으면(undefined 또는 Null) undefined 반환

const length1 = post.author!.length;
// post.author 는 있어!, 단언
// post 객체 프로퍼티 author 가 없음에도, 있다고 단언을 함으로써
// 에러가 안나게 할 수 있다. => 위험한 문법
