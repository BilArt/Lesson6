class Abonent {
    constructor(name, phoneNumber) {
        this.name = name;
        this.phoneNumber = phoneNumber;
    }

    setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    getInfo() {
        return `Ім'я: ${this.name}, Номер телефону: ${this.phoneNumber}`;
    }
}

const abonent1 = new Abonent("Іван", "123-456-789");
const abonent2 = new Abonent("Марія", "987-654-321");
const abonent3 = new Abonent("Петро", "555-123-789");

abonent1.setPhoneNumber("954-324-331");
abonent2.setPhoneNumber("310-524-121");
abonent3.setPhoneNumber("431-888-399");

console.log(abonent1.getInfo());
console.log(abonent2.getInfo());
console.log(abonent3.getInfo());