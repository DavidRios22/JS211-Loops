
const countToThousaund  = () => {
    let i = 1
    do {
        console.log(i);
        i++
    } while (i < 1001)
}

const person = { 
    firstName: "Jane",
    lastname: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}

const keyLogger = () => {
    // console.log(Object.keys(person));
}



const valueLogger = () => {
    for (const [key, value] of Object.entries(person)) {
        // console.log(`The key is ${key}: and the value is ${value}`);
    }
}



const people = [
    {
        firstName: "Jane",
        lastname: "Doe",
        birthDate: "Jan 5, 1923",
        gender: "female"
    },
{
        firstName: "Jane",
        lastname: "Doe",
        birthDate: "Jan 9, 1925",
        gender: "female"
    },
{
        firstName: "Jane",
        lastname: "Doe",
        birthDate: "Jan 8, 1921",
        gender: "male"
    },
{
        firstName: "Jane",
        lastname: "Doe",
        birthDate: "Jan 2, 1998",
        gender: "female"
    },
{
        firstName: "Jane",
        lastname: "Doe",
        birthDate: "Jan 10, 1990",
        gender: "male"
    }
]

const oddYear = () => {
    for (const peep of people) {
        let birthYear = peep.birthDate.split(" ")
        if (birthYear[2] % 2 == 1) {
            // console.log(peep);
        }
    }
}

const mapOfPeople = (person) => {
    return [person.firstName, person.lastname, person.birthDate, person.gender].join(" ")
}


const onlyMales = people.filter(person => (person.gender == "male"))

const bornBefore = () => {
    for (const peep of people) {
        let birthYear = peep.birthDate.split(" ")
        if (birthYear[2] < 1990) {
            // console.log(birthYear);
        }
    }
}

bornBefore()

const findMale = people.find(peep => peep.gender == "male")

const findMaleIndex = people.findIndex(peep => peep.gender == "male")

console.log(findMale);
console.log(findMaleIndex);

