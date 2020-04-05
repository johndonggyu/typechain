/*
const name = "John",
    age = 26,
    gender = "male";
*/

// interface는 typescript에만 있는 거임
// javascript에는 없음
/*
interface Human {
    name: string;
    age: number;
    gender: string;
}
*/
class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const michael = new Human("Michael", 25, "male");

/*
const person = {
    name: "John",
    age: 26,
    gender: "male"
};
*/

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(michael));

export {};

// 물음표는 선택 사항인 것임을 알려준다.
