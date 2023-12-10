// object
let user = {
    id: 1,
    name: "ruru",
};
user = {
    name: "lucky"
};
// readonly 키워드 : 값이 수정되면 안되는 프로퍼티의 경우
let config = {
    apiKey: "API KEY"
};
export {};
// config.apiKey = "KEY2"; // 값 수정시 에러발생
// 객체의 모든 프로퍼티를 타입으로 정의 - 객체 리터럴 타입
// 객체를 이루는 속성, 메서드가 어떻게 생겼는지
// 객체의 구조를 기준으로 타입을 정의 -> 구조적 타입 시스템(Property Based TS)
