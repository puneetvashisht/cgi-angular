function createCustomerId(name: string, id: number): string{
    return name+id;
}
/*
 let idGenerator: (chars:string, nums: number) => string;
 idGenerator = createCustomerId;
 */

interface stringGenerator{
    (chars: string, nums: number): string;
}

let idGenerator: stringGenerator;
idGenerator = createCustomerId;

interface User{
    email: string,
    password?: string
}

let user : User = {email: 'test@test.com', password: 'testest'}