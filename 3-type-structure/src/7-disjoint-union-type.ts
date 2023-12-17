/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입
 * 교집합이 없는 두개의 집합 - 서로소 집합 ex) string, number
 * 프로퍼티를 스트링타입으로 다르게 정의하면 -> 각각의 객체는 서로소 집합의 관계를 갖는다.
 * 예) authority가 ADMIN 이면서 동시에 MEMBER 일 수 없다.
 * 🍒 직관적이고 안전하게 타입을 좁힐 수 있다.
 */

type Admin = {
  authority: "ADMIN"; // 스트링 리터럴 타입
  name: string;
  kickCount: number;
};

type Member = {
  authority: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  authority: "GUEST";
  name: string;
  visitCount: number;
};

// 유니언 타입
type User = Admin | Member | Guest; // 서로소 유니언타입

// 함수 기능 정의
// Admin 타입 -> {name} 님 현재까지 {kickCount} 명 강퇴했습니다.
// Member 타입 -> {name} 님 현재까지 {point} 모았습니다.
// Guest 타입 -> {name} 님 현재까지 {visitCount} 번 오셨습니다.
function login(user: User) {
  // switch문
  switch (user.authority) {
    case "ADMIN": {
      console.log(`${user.name} 님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name} 님 현재까지 ${user.point} 모았습니다.`);
      break;
    }
    case "GUEST": {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
      break;
    }
  }

  // if 문
  // // if("kickCount" in user) { // 속성 in 값 타입가드 -> 명확하지 않다.
  // if (user.authority === "ADMIN") {
  //   console.log(`${user.name} 님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  // } else if (user.authority === "MEMBER") {
  //   // else if("point" in user) {
  //   console.log(`${user.name} 님 현재까지 ${user.point} 모았습니다.`);
  // } else {
  //   console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  // }
}

/**
 * 비동기 작업의 결과를 처리하는 객체
 */

const loading: AsyncType = {
  state: "LOADING",
};

const failed: AsyncType = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은",
  },
};

const success: AsyncType = {
  state: "SUCCESS",
  response: {
    data: "데이터",
  },
};

// 😵 비동기 결과를 처리하는 공통 타입 // 에러
// type AsyncType = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: { // 선택적 프로퍼티 -> undefined 가능성
//     message: string;
//   };
//   response?: { // 선택적 프로퍼티 -> undefined 가능성
//     data: string;
//   };
// };
// ${task.error.message} // 에러 // task.error 가 undefined 일 가능성
// FAILED 일때의 객체 failed 에는 error.message 가 있어도,
// task의 AsyncType 에는 error 속성이 선택적 프로퍼티(옵셔널체이닝)으로 되있으므로 -> 확실히 있다가 아님
// ${task.response.data} 도 마찬가지 이유로 에러

// 🐥 비동기 결과를 처리하는 올바른 방법
// 🍒 객체의 여러가지 상태를 표현해야하는 객체타입 정의시
// 타입을 서로소 유니언 타입으로 정의하기
// state 같은 프로퍼티 문자열 리터럴 타입 추가 -> 서로소 타입
// 해당 타입인 경우, 프로퍼티가 무조건 있다 -> 프로퍼티 undefined 가능성 X
type AsyncType = LoadingType | FailedType | SuccessType;

type LoadingType = {
	state: "LOADING"
}

type FailedType = {
	state: "FAILED",
	error: {
		message: string;
	}
}

type SuccessType = {
	state: "SUCCESS",
	response: {
		data: string;
	}
}

// 함수 기능정의
// 로딩중 -> 콘솔에 로딩중 출력
// 실패 -> 실패: 에러메시지 출력
// 성공 -> 성공: 데이터 출력
function result(task: AsyncType) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩중");
      break;
    }
    case "FAILED": { // task.state 가 FAILED 일때는 무조건 FailedType // 타입 좁히기
      console.log(`실패: ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공: ${task.response.data}`); 
      break;
    }
  }
}
