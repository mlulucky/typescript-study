// 타입 별칭
// 타입을 변수처럼 사용
// 공통적으로 사용되는 타입
type User = {
  // 타입을 변수로 선언. 안에 내용은 타입을 선언
  id: number;
  name: string;
  nickname: string;
};

// 타입별칭은. 타입은 타입스크립트를 컴파일하면(자바스크립트) 사라진다.

// type User = {} // 동일한 scope 에서 동일한 변수명을 중복 사용하면 에러(변수처럼)
function func() {
  type User = {}; // 함수 스코프 내에서의 타입은 별도로 정의하여 사용 가능
}

let user1: User = {
  id: 1,
  name: "dmswjd",
  nickname: "mlucky",
};
let user2: User = {
  id: 2,
  name: "dmswjd",
  nickname: "mlucky",
};
let user3: User = {
  id: 3,
  name: "dmswjd",
  nickname: "mlucky",
};

// 인덱스 시그니처

// property 의 key, value
// key 가 string 이고 value 가 string 인 타입 모두 허용하기
// key 와 value 타입에 규칙이 있는 경우
// 규칙성을 이용하여 타입을 정의
type CountryCode = {
	[key: string]: string; // key 타입 : value 타입
}

let countryCodes: CountryCode = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
	[key: string]: number;
	// Korea: string;
}
// 인덱스 시그니처로 타입선언시 주의
// 추가적인 프로퍼티타입을 정의하는 경우
// 인덱스 시그니처의 타입과 일치하거나 호환해야한다.
// -> 일치 하지 않는 경우 에러발생

let countryNumberCodes: CountryNumberCodes = {
	Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
}

let countryNumberCodes1: CountryNumberCodes = {
	// Korea:"kor", 에러발생 // 🐥 인덱스 시그니처의 타입(number)과 일치하지 않으므로
} 
// 규칙을 위반하지 않으면 모든 객체 타입을 허용.
// 비어있는 객체 -> 프로퍼티가 없는 경우 -> 규칙을 위반할 프로퍼티X -> 에러발생X




