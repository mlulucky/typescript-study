/**
 * 인터페이스와 클래스
 * 인터페이스 == 클래스의 설계도
 * 클래스 == 인터페이스를 구현한 객체를 생성
 */

// 인터페이스
// 객체 타입정의
// 클래스의 설계도
interface CharacterInterface {
  name: string; // 🐥 인터페이스로 정의하는 필드는 무조건 public
  moveSpeed: number;
  move(): void;
}

// 클래스
// 객체를 생성하는 틀
// 인터페이스가 정의하는 객체를 클래스가 생성하는 방법
// => 클래스가 인터페이스를 구현(implements)
class Character implements CharacterInterface {
  // 🐥 인터페이스로 정의하는 필드는 무조건 public
  // public 이 아닌 private, protected 접근제어자 정의시 에러
  // => constructor(private name: string, public moveSpeed: number) {}
  // private 필드가 필요하면 인터페이스 정의하지 말고, 클래스에서 따로 직접 정의
  // => private skill
  constructor(
    public name: string,
    public moveSpeed: number,
    private skill: string
  ) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동중`);
  }
}
