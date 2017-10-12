class Student {
    fullName: string;
    constructor(public firstName: string, public gender: string, public lastName: string){
        this.fullName = `${gender} ${firstName} ${lastName}`;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function myName(person: Person){
    return `Bonjour, mon nom est ${person.firstName} ${person.lastName}`;
}

var student = new Student('Franck', 'M', 'Wehrling');

document.body.innerHTML = myName(student);