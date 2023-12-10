// enum 타입
// 열거형 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입(자바스크립트에는 없는 타입스크립트 타입)
// 👀 enum 타입을 값으로 사용하기 -> 타입스크립트 컴파일 결과 타입 사라지지 않을까 ?
// => enum 타입은 컴파일 결과 사라지지 않는다.
// 🍏 숫자형 enum
// enum Role {
//   ADMIN = 10, // 첫번째 값만 할당하여도, 이후 값들은 순서대로 11, 12 가 할당된다. // 👀 값을 할당하지 않아도, 순서대로 0,1,2 숫자 값이 할당된다
//   USER,
//   GUEST,
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 10] = "USER";
    Role[Role["GUEST"] = 11] = "GUEST";
})(Role || (Role = {}));
// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2,
// }
// 🍏 문자형 enum
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "dmswjd",
    role: Role.ADMIN, // 0 <- 관리자
    language: Language.korean,
};
const user2 = {
    name: "ruby",
    role: Role.USER, // 1 <- 일반유저
};
const user3 = {
    name: "lucky",
    role: Role.GUEST, // 2 <- 게스트
};
console.log(user1, user2, user3);
export {};
// { name: 'dmswjd', role: 0 } { name: 'ruby', role: 1 } { name: 'lucky', role: 2 }
// 🐥 관리자가 0번 이었는지, 1번 이었는지 등 까먹거나 헷갈려할경우
// enum 타입으로 지정을 하여, enum 타입을 사용하면 정확한 값을 사용 가능
