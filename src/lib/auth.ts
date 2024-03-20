import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { connectToDb } from "./dbConnect";
import { User } from "./models";
import CredentialsProvider from "next-auth/providers/credentials";

const login = async (credentials: Partial<Record<string, unknown>>) =>{
  try {
    connectToDb();
    const user = await User.findOne({username: credentials.username, password: credentials.password})

    if (!user){
      throw new Error("Wrong credentials")
    }
    return user;
  } 
  catch (error) {
    console.log(error)
    throw new Error("something went wrong")
  }
}

export const { handlers: {GET, POST}, auth ,signIn, signOut} = NextAuth({ providers: [ 
    GitHub({
        clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials){
        try {
          const user = await login(credentials);
          return user
        } catch (error) {
          return null;
        }
      }
    })
],
callbacks: {
  async signIn({ user, account, profile }) {
    if (account?.provider === "github") {
      connectToDb();
      try {
        const user = await User.findOne({ email: profile?.email });

        if (!user) {
          const newUser = new User({
            username: profile?.login,
            email: profile?.email,
            image: profile?.avatar_url,
          });

          await newUser.save();
        }
      } catch (err) {
        console.log(err);
        return false;
      }
    }
    return true;
  },
}
})
