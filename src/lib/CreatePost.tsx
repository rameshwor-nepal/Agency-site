import { connectToDb } from "./dbConnect";
import { Post } from "./models";

export const CreatePost = async(formData: FormData) =>{
    "use server"
    const {title, body, userId, slug} = Object.fromEntries(formData);

    try {
        connectToDb();
        const newPost = new Post({
            title, body, userId, slug
        });
        await newPost.save();
        console.log("post saved to database")
        
    } catch (err) {
        return {error: "Something went wrong"}
    }
}