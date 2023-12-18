/**
 * 접근 제어자
 * access modifier
 * 타입스크립트의 클래스에서만 제공되는 기능
 * 클래스의 필드, 메서드에 접근할 수 있는 범위설정
 * => public private protected
 * 
 * 기본 접근제어자 public(공공의) - 클래스 외부에서 클래스 프로퍼티에 접근해 값 수정가능
 * private - 클래스 내에서만 접근 가능, 상속을 받는 클래스 내에서도 사용불가
 * protected - 클래스 외부에서 접근 불가, 상속을 받는 클래스 내에서는 사용가능
*/


// 클래스
class Employee {
	// 필드
	// private name: string;
	// protected like: string;
	// position: string; // 기본접근제어자 - public 

	// 생성자
	// 🐥 생성자의 매개변수에 접근제어자 등록가능
	// => 자동으로 필드를 만들어준다.
	// => 필드의 값 초기화도 자동으로 해준다. // this.name = name 생략가능
	constructor(private name: string, protected like: string, public position: string){
		// this.name = name;
		// this.like = like;
		// this.position = position;
	}
	// 메서드
	work() {
		console.log("일하는 중");	
	}
}

class ExecutiveOfficer extends Employee {
	// 필드
	officerNumber: number;
	// 생성자
	constructor(name: string, like: string, position: string, officerNumber: number) {
		super(name, like, position);
		this.officerNumber = officerNumber;
	}
	// 메서드
	work() {
		console.log("회의중");
		// this.name; // 에러 // private 접근제어자 - 파생 클래스 내에서도 접근불가 
		this.like; // protected 접근제어자 - 파생 클래스(상속을받은 클래스) 내에서 접근가능 
	}

}

const employee = new Employee("mlucky", "dog", "developer");
// 인스턴스는 객체이므로 프로퍼티에 접근해서 값 수정 가능

// employee.name = "ruby"; // 에러 // private 접근제어자 - 클래스 외부에서 접근불가 
// employee.like= "play"; // 에러 // protected 접근제어자 - 클래스 외부에서 접근불가
employee.position = "ceo"; // public 접근 제어자 - 클래스 외부에서 접근가능
console.log(employee);