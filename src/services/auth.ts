import { v4 as uuid } from "uuid";

type SignInRequestDate = {
    email: string;
    password:string;
}

const delay  = (amount = 750) => new Promise(resolve=>setTimeout(resolve, amount));

export async function signInRequest(data:SignInRequestDate) {
    await delay();

    return{
        token: uuid(),
        user:{
            name:'João Eduado Panzo',
            email:'john404edwards@gamil.com',
            avatar_url:'https://github.com/eduardopanzo.png'
        }
    }
}

export async function recoverUserInformation(){
    await delay();

    return{
        user:{
            name:'João Eduado Panzo',
            email:'john404edwards@gamil.com',
            avatar_url:'https://github.com/eduardopanzo.png'
        }
    }
}