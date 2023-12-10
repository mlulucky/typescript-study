// 타입별칭은. 타입은 타입스크립트를 컴파일하면(자바스크립트) 사라진다.
// type User = {} // 동일한 scope 에서 동일한 변수명을 중복 사용하면 에러(변수처럼)
function func() {
}
let user1 = {
    id: 1,
    name: "dmswjd",
    nickname: "mlucky",
};
let user2 = {
    id: 2,
    name: "dmswjd",
    nickname: "mlucky",
};
let user3 = {
    id: 3,
    name: "dmswjd",
    nickname: "mlucky",
};
let countryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};
// 인덱스 시그니처로 타입선언시 주의
// 추가적인 프로퍼티타입을 정의하는 경우
// 인덱스 시그니처의 타입과 일치하거나 호환해야한다.
// -> 일치 하지 않는 경우 에러발생
let countryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
};
let countryNumberCodes1 = {
// Korea:"kor", 에러발생 // 🐥 인덱스 시그니처의 타입(number)과 일치하지 않으므로
};
export {};
// 규칙을 위반하지 않으면 모든 객체 타입을 허용.
// 비어있는 객체 -> 프로퍼티가 없는 경우 -> 규칙을 위반할 프로퍼티X -> 에러발생X
