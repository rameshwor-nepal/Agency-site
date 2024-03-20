"use server"
import { revalidatePath } from "next/cache";
import { connectToDb } from "./dbConnect";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";

export const CreatePost = async (formData: FormData) => {
    const { title, body, userId, slug } = Object.fromEntries(formData);

    try {
        connectToDb();
        const newPost = new Post({
            title, body, userId, slug
        });
        await newPost.save();
        console.log("post saved to database")
        revalidatePath('/blog')

    } catch (err) {
        return { error: "Something went wrong" }
    }
}


export const handleGithubLogIn = async () => {
    await signIn("github")
}
export const handleLogOut = async () => {
    await signOut();
}

export const register = async (formData: FormData) => {
    const { username, email, password1, password2 } = Object.fromEntries(formData);
    if (password1 !== password2) {
        return "Password do not match"
    }

    try {
        connectToDb();
        const newUser = new User({
            username,
            email,
            password: password1
        });
        await newUser.save()
    } catch (error) {
        console.log(error)
        return { error: "Something went wrong" }
    }
}

export const logIn = async (formData: FormData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", { username, password });
    } catch (error) {
        console.log(error)
        return { error: "Something went wrong" }
    }
}