// 배열 // 배열요소타입[] // [] 배열
// 배열에 들어가는 요소들의 타입이 하나인 경우

let numArr:number[] = [1,2,3];

let strArr: string[] = ["hello", "ts", "world"];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의
let doubleArr: number[][] = [[1,2,3], [4,5]];
// number[][] - number 타입 배열[]을 저장하는 배열[]

// 튜플 
// 길이와 타입이 고정된 배열 - 타입스크립트에만 있는 타입(자바스크립트에 X)
let tup1: [number, number] = [1,2];
// tup1 = [1,2,3]; // 튜플의 길이(2)를 만족하지 않는 -> 에러
// tup1 = ["1", "2"]; // 튜플의 타입(number)을 만족하지 않는 -> 에러

let tup2: [number, string, boolean] = [1, "2", true];

// 배열을 사용할때, 인덱스 위치의 타입이 정해져있고, 순서를 지키는게 중요할때
// 튜플타입을 이용해서 값이 잘못 들어감을 방지할 수 있다.

const user:[string, number][] = [ // string, number 타입의 배열을 저장한 배열[] 타입
	["미미", 1],
	["레레", 2],
	["솔솔", 3],
	// [4,"도도"] // 튜플타입으로 string,number 순서로 정의를 했으므로 number, string 타입 선언시 에러
]
