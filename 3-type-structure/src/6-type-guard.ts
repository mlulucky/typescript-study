/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법
 * 
 * 타입가드 
 * typeof 값 : 값의 타입을 체크
 * 값 instanceof 객체 : 값이 객체인가? 체크
 * 
 * 프로퍼티 in 값 : 값에 프로퍼티(속성)이 존재하는가? 존재 true, 아니면 false
 * => 값은 null, undefined 이면 안된다.
 */


function func(value: number | string | Date | null | Person) { // value 는 number 타입 또는 string 타입
	// value.toUpperCase(); // toUpperCase 가 number 타입에는 없는 메서드이므로 에러
	// value.toFixed(); // toFixed 가 string 타입에는 없는 메서드이므로 에러
  if (typeof value === "number") { // value 가 number 타입이면
		console.log(value.toFixed()); 
  } else if (typeof value === "string") { // value 가 string 타입이면
    console.log(value.toUpperCase());
  }
	//else if (typeof value === "object") { // Date, null 모두 object 타입
	else if (value instanceof Date) {	// value 가 Date 객체인가? 
		console.log(value.getTime()); // Date 객체 추론
	}
	// else if (value instanceof Person) { // instanceof 뒤에는 타입이 올수 없다. 객체가 와야함.
	else if(value && "name" in value) { // => in => value 에 name 속성이 있냐? -> 있으면 value 는 Person 타입
		console.log(`${value.name}은 ${value.age}살 입니다.`);
	}
}

type Person = {
	name: string;
	age: number;
}