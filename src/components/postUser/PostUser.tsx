import React from 'react'
import styles from './PostUser.module.css'

const getData = async(id: number): Promise<GetPostUser> =>{
    const res = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    if (!res){
      throw new Error ("Something went wrong")
    }
    return (await res).json()
  }
const PostUser = async({id}: {id: number}) => {
    const user = await getData(id);
  return (
    <div className={styles.detailText}>
    <span className={styles.detailTitle}>Author</span>
    <span className={styles.detailValue}>
     {user.name}
    </span>
  </div>
  )
}

export default PostUser