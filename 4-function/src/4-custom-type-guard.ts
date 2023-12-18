/**
 * 사용자 정의 타입가드
 * 참 또는 거짓을 반환하는 함수를 이용해 원하는 타입가드 만들기
*/

type Dog = {
	name: string;
	isBark: boolean;
}

type Cat = {
	name: string;
	isScratch: boolean;
}

type Animal = Dog | Cat;

// 사용자 정의 타입
// Dog 타입 체크하는 가드 => Dog 타입은 true / Cat 타입은 false 반환
function isDog(animal: Animal): animal is Dog { // 함수의 반환값이 true 이면 animal 값은 Dog 타입이다 라고 선언 // 타입가드 역할
	// isBark 속성이 있으면 Dog 타입
	// return "isBark" in animal; // 방법1
	return (animal as Dog).isBark !== undefined; // 방법2 // animal 이 Dog 타입이고, isBark 속성이 있는 경우!
	// animal.isBark 에러 => animal 은 Cat 타입일 수 도 있으므로 => animal 이 Dog 타입이라고 단언
}

// Cat 타입 체크하는 가드
function isCat(animal: Animal): animal is Cat {
	return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
	if(isDog(animal)) {
		console.log("짖습니다.");
	}
	else if(isCat(animal)) {
		console.log("할큅니다.");
	}
}

// 프로퍼티 in 값 타입가드의 문제
// 1. 코드를 봤을때, 명확성이 떨어진다.
// 2. 프로퍼티의 이름이 변경될 경우 코드 동작안됨

// 🐥 타입에 특정프로퍼티를 추가함으로써 서로소 유니언타입 만들기 => 할 수 없는 경우
// => 사용자 정의 타입만들기!

// function warninig(animal: Animal) {
// 	// 개인 경우
// 	if("isBark" in animal) { // 프로퍼티 in 값
// 		console.log(animal.isBark ? "짖습니다." : "안짖습니다.");
// 	}
// 	// 고양이인 경우
// 	else if("isScratch" in animal) {
// 		console.log(animal.isScratch ? "할큅니다": "안할퀴어요");
// 	}
// }





