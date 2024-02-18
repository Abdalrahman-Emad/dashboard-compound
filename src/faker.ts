import { faker } from '@faker-js/faker';

const tableFaker = () => {
    return {
        id: faker.random.numeric(5),
        firstName: faker.name.firstName(),
        lastName: faker.name.firstName(),
        registeredUnit: faker.datatype.number(),
        email: faker.internet.email(),
        mobile: faker.phone.number('012-###-####'),
        requestDate: faker.date.future(),
    };
};
const unitTableFaker = () => {
    return {
        id: faker.random.numeric(5),
        type: faker.word.noun(),
        unitNo: faker.datatype.number(),
        status: "Under Construction",
        unitArea: faker.datatype.number(),
        owner: faker.name.firstName(),
    };
};
const requestTableFaker = () => {
    return {
        category: faker.commerce.product(),
        status: faker.word.noun(),
        phases: faker.datatype.number(),
        creator: faker.name.firstName(),
        unit: faker.datatype.number(),
        lastUpdate: faker.date.future(),
        commentCount: faker.datatype.number(200),
        rating: faker.datatype.number(5),
    };
};
export const chatUserFaker = () => {
    return {
        id:faker.datatype.uuid(),
        name: faker.name.firstName(),
        message: faker.lorem.lines(),
        img: faker.image.avatar(),
    };
};

export const fakeTable = (numUsers: number) => {
    return new Array(numUsers).fill(undefined).map(tableFaker);
};
export const fakeUnitsTable = (numUsers: number) => {
    return new Array(numUsers).fill(undefined).map(unitTableFaker);
};
export const fakeRequestTable = (numUsers: number) => {
    return new Array(numUsers).fill(undefined).map(requestTableFaker);
};
export const fakeChatUserList = (numUsers: number) => {
    return new Array(numUsers).fill(undefined).map(chatUserFaker);
};
