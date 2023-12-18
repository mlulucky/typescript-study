/**
 * 타입스크립트의 클래스
*/

// 객체
const employee = {
	name: "mlucky",
	like: "dog",
	position: "developer",
	work(){
		console.log("일하는 중")
	}
}

// 🐥 객체를 만드는 클래스
class Employee {
	// 필드
	name: string;
	like: string;
	position: string;
	// 생성자
	constructor(name: string, like: string, position: string){
		this.name = name;
		this.like = like;
		this.position = position;
	}
	// 메서드
	work() {
		console.log("일하는 중");	
	}
}

const employeeB = new Employee("mlucky", "dog", "developer");
console.log(employeeB);
console.log(employee);

// 🐥 타입스크립트 클래스는 타입으로 활용된다.
// 클래스의 필드, 메서드가 있다고 하면 해당 클래스 타입으로 본다.
const employeeC: Employee = {
	name: "mlucky",
	like: "dog",
	position: "developer",
	work() {}
}

// 🐥 타입 클래스 확장(상속)
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
	}
}

const executiveOfficer = new ExecutiveOfficer("mlucky", "dog", "ceo", 2);
console.log(executiveOfficer);
executiveOfficer.work();