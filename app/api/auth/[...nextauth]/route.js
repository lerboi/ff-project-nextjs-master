import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const authOptions = {
    providers: [
        Credentials({
            credentials: {
                email: {type: "text", placeholder: "Enter Email"},
                password: {type:"password", placeholder:"Enter Password"}
            },
            async authorize(credentials, req){
                let user = null
                //authorise logic

                user ={
                    name: 'leroy',
                    email: "lnzz@gmail.com"
                }

                return user
            }
        })
    ],
    session: {
        strategy: "jwt"
    }
}

export const handlers = NextAuth(authOptions)
const GET = handlers
const POST = handlers
export {GET, POST}