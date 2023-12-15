/**
 * 대수 타입
 * 여러개의 타입을 합성해서 새롭게 만들어내는 타입
 * 합집합 타입과 교집합 타입
 */

/**
 * 합집합 타입 - Union 타입
 */

let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  // Dog 타입 / 프로퍼티
  name: "",
  color: "",
};

let union2: Union1 = {
  // Person 타입 / 프로퍼티
  name: "",
  language: "",
};

let union3: Union1 = {
  // Dog 타입 & Person 타입 교집합
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = { // name 속성만 가진 객체는 어떤 타입에도 포함되지 않는다.
//   name: "",
// };

/**
 * 교집합 타입 - Intersection 타입
 */

// number 타입과 string 타입은 교집합이 없다 => 불가능한 집합 === 공집합 === never 타입
// 기본타입의 경우 교집합은 없기 때문에 거의 never 타입
// 교집합 타입은 객체 타입에 많이 사용된다.

type Intersection = Dog & Person;
let intersection: Intersection = { name: "", color: "", language: "" };
// Dog 타입과 Person 타입을 모두 가지는 객체
