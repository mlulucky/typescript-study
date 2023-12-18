/**
 * 클래스
 * 동일한 형식 -> 객체 // 중복코드 발생
 * 객체를 만들어내는 틀
 * 🐥 중복코드(필드, 생성자, 메서드) => 클래스 상속(확장)하기!
*/

let studentA = {
	name: "mlucky",
	grade: "A",
	like: "dog",
	study() {
		console.log("노력함");
	},
	introduce() {
		console.log("안녕하세요");
	}
}

// 클래스 선언
// 학생 객체를 공장처럼 찍어낼 수 있다.
class Student { // 객체를 만드는 틀 
	// 필드 - 객체 프로퍼티
	name;
	grade;
	like;

	// 생성자 - 객체를 만드는 메서드
	constructor(name, grade, like) {
		this.name = name; // this - 이 클래스가 지금 만들고있는 객체
		this.grade = grade;
		this.like = like;
	};
	// 메서드
	study() {
		console.log("노력함");
	}

	introduce() {
		console.log(`안녕하세요 ${this.name} 입니다.`);
	}
}

// 클래스로 객체 생성 -> 인스턴스 (클래스로 만든 객체)
// new 키워드 // new 클래스명()
// => == 클래스의 생성자 호출
// 스튜던트 인스턴스
let studentB = new Student("mlucky", "A", "dog"); 
// Student { name: 'mlucky', grade: 'A', like: 'dog' }
console.log(studentB);
studentB.study();
studentB.introduce();


// Student 클래스를 상속받음
// Student 클래스의 필드, 생성자, 메서드를 그대로 내려받음.
class StudentDeveloper extends Student { 
	// 필드
	skill;
	// 생성자
	constructor(name, grade, like, skill) {
		super(name, grade, like); // super(): 부모클래스의 생성자 호출
		this.skill = skill;
	}
	// 메서드
	programming() {
		super.study(); // super: 부모 클래스 호출
		console.log(`${this.skill}로 프로그래밍 함`);
	}
}

const studentDeveloper = new StudentDeveloper("mlucky", "B", "dog", "TS");
console.log(studentDeveloper);
studentDeveloper.programming();