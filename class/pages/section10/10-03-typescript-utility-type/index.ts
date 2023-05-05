export interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 유틸리티 타입
// 1. Partial 타입 - ?를 다 넣어준다.
type aaa = Partial<IProfile>;

// 2. Required 타입 - ?를 다 삭제한다.
type bbb = Required<IProfile>;

// 3. Pick  타입 - 원하는걸 고른다.
type ccc = Pick<IProfile, "name" | "age">;

// 4. Omit 타입 - 원하는걸 없앤다.
type ddd = Omit<IProfile, "school">;

// 5. Record 타입
type eee = "철수" | "영희" | "훈이"; // Union 타입
const child: eee = "철수"; // 철수, 영희, 훈이만 됨
const child2: string = "사과"; // 다른것도 다 됨

type fff = Record<eee, IProfile>; // Record 타입

// 6. 객체의 key들로 Union타입 만들기
type ggg = keyof IProfile; // "name" | "age" | "school" | "hobby"
const myprofile: ggg = "school";

// 7. type과 interface의 차이 => 인터페이스는 선언병합 가능
export interface IProfile {
  candy: number; // 선언병합으로 추가됨
}

// 8. 배운거 응용
const profile: Partial<IProfile> = {
  candy: 10,
};
