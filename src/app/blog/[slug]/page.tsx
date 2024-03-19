import Image from "next/image";
import styles from "./SingleBlog.module.css";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";

const getData = async(slug: number) : Promise<GetPosts> =>{
  const res = fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)

  if (!res){
    throw new Error ("Something went wrong")
  }
  return (await res).json()
}
const SinglePostPage = async ({params}:Params) => {

  const {slug} = params;
  const post = await getData(slug);

  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src={"/post.png"} alt="" width={500} height={300} className={styles.img} />
        </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
         <Image src={"/post.png"} alt="detail"  width={50} height={50}/>
         <Suspense fallback={<div>Loading......</div>}>
          <PostUser id = {post.userId}/>
         </Suspense>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;