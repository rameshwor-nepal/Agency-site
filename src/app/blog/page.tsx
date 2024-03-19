import React from 'react'
import styles from './blog.module.css'
import PostCard from '@/components/postCard/PostCard'

  const getData = async(): Promise<GetPosts[]> =>{
    const res = fetch("https://jsonplaceholder.typicode.com/posts")

    if (!res){
      throw new Error ("Something went wrong")
    }
    return (await res).json()
  }

const BlogPage = async() => {
  const posts: GetPosts[] = await getData();

  return (
    <div className={styles.container}>
      { posts.length && 
        posts.map((el, index) =>(
          <div className={styles.post} key= {index}>
        <PostCard data= {el}/>
      </div>
      ))}
    </div>
  )
}

export default BlogPage